import { AccessToken, Privilege, parseToken } from ".";

const appID = "123456781234567812345678";
const appKey = "app key";
const roomID = "new room";
const userID = "new user id";

const token = new AccessToken(appID, appKey, roomID, userID);

token.addPrivilege(Privilege.PrivSubscribeStream, 0);
token.addPrivilege(
  Privilege.PrivPublishStream,
  Math.floor(new Date().getTime() / 1000) + 24 * 3600
);
token.expireTime(Math.floor(new Date().getTime() / 1000) + 24 * 3600);

const s = token.serialize();

console.log(s);

const key2 = parseToken(s);

console.log(key2);

console.log(key2?.verify(appKey));
