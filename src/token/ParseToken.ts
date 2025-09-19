import { VERSION, AccessToken } from "./AccessToken";
import BufferReader from "./BufferReader";

const VERSION_LENGTH = 3;
const APP_ID_LENGTH = 24;

export function parseToken(raw: string): AccessToken | undefined {
  try {
    if (raw.length <= VERSION_LENGTH + APP_ID_LENGTH) {
      return;
    }
    if (raw.slice(0, VERSION_LENGTH) !== VERSION) {
      return;
    }

    const appID = raw.slice(VERSION_LENGTH, VERSION_LENGTH+APP_ID_LENGTH);
    const contentBuf = Buffer.from(
      raw.slice(VERSION_LENGTH + APP_ID_LENGTH),
      "base64"
    );
    const readbuf = new BufferReader(contentBuf);
    const msg = readbuf.getString();

    const signature = readbuf.getString().toString();

    // parse msg
    const msgBuf = new BufferReader(msg);
    const nonce = msgBuf.getUint32();
    const issuedAt = msgBuf.getUint32();
    const expireAt = msgBuf.getUint32();
    const roomID = msgBuf.getString().toString();
    const userID = msgBuf.getString().toString();
    const privileges = msgBuf.getTreeMapUInt32();

    const token = new AccessToken(appID, "", roomID, userID);

    token.signature = signature;
    token.nonce = nonce;
    token.issuedAt = issuedAt;
    token.expireAt = expireAt;
    token.privileges = privileges;

    return token;
  } catch (err) {
    console.log(err);
  }
}
