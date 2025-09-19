import * as crypto from "crypto";
import BufferWriter from "./BufferWriter";

export const VERSION = "001";

export enum Privilege {
  PrivPublishStream = 0,
  PrivSubscribeStream = 4,
}

enum PrivatePrivilege {
  PrivPublishAudioStream = 1,
  PrivPublishVideoStream,
  PrivPublishDataStream,
}

export class AccessToken {
  appID: string;
  appKey: string;
  roomID: string;
  userID: string;
  issuedAt: number;
  nonce: number;
  expireAt: number;
  privileges: Map<number, number>;
  signature?: string;

  constructor(appID: string, appKey: string, roomID: string, userID: string) {
    this.appID = appID;
    this.appKey = appKey;
    this.roomID = roomID;
    this.userID = userID;
    this.issuedAt = Math.floor(new Date().getTime() / 1000);
    this.nonce = Math.floor(Math.random() * 0xffffffff);
    this.expireAt = 0;
    this.privileges = new Map();
  }

  addPrivilege(privilege: Privilege, expireTimestamp: number): void {
    this.privileges.set(privilege.valueOf(), expireTimestamp);

    if (privilege === Privilege.PrivPublishStream) {
      this.privileges.set(
        PrivatePrivilege.PrivPublishAudioStream.valueOf(),
        expireTimestamp
      );
      this.privileges.set(
        PrivatePrivilege.PrivPublishVideoStream.valueOf(),
        expireTimestamp
      );
      this.privileges.set(
        PrivatePrivilege.PrivPublishDataStream.valueOf(),
        expireTimestamp
      );
    }
  }

  // ExpireTime sets token expire time, won't expire by default.
  // The token will be invalid after expireTime no matter what privilege's expireTime is.
  expireTime(expireTimestamp: number): void {
    this.expireAt = expireTimestamp;
  }

  // Serialize generates the token string
  serialize(): string {
    const bytesM = this.packMsg();
    const signature = this.encodeHMac(this.appKey, bytesM);
    const content = new BufferWriter()
      .putBytes(bytesM)
      .putBytes(signature)
      .pack();

    return VERSION + this.appID + content.toString("base64");
  }

  verify(key: string): boolean {
    if (
      this.expireAt > 0 &&
      Math.floor(new Date().getTime() / 1000) > this.expireAt
    ) {
      return false;
    }
    return this.encodeHMac(key, this.packMsg()).toString() === this.signature;
  }

  private packMsg(): Buffer {
    const bufM = new BufferWriter();

    bufM.putUint32(this.nonce);
    bufM.putUint32(this.issuedAt);
    bufM.putUint32(this.expireAt);
    bufM.putString(this.roomID);
    bufM.putString(this.userID);
    bufM.putTreeMapUInt32(new Map([...this.privileges.entries()].sort()));

    return bufM.pack();
  }

  private encodeHMac(key: string, message: Buffer): Buffer {
    return crypto.createHmac("sha256", key).update(message).digest();
  }
}
