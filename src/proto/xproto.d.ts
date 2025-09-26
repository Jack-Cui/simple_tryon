import * as $protobuf from "protobufjs";
import Long = require("long");
/** eError enum. */
export enum eError {
    UNKNOWN = 0,
    SUCCESS = 1,
    FAILD = 2,
    ERROR_REQ_PARAM = 41,
    ERROR_OTHER_ROOM_OPEN = 42,
    ERROR_CREATE_ROOM_FAIL = 43,
    ERROR_ENTER_ROOM_FAIL = 44,
    EMPTY_INS_TOKEN = 51,
    UNSET_INS_TOKEN = 52,
    ERROR_INS_TOKEN = 53,
    ERROR_APP_SERVER_CONNECT_FAIL = 61,
    ERROR_APP_SERVER_RET_NOT_200 = 62,
    ERROR_APP_SERVER_RET_NOT_JSON = 63,
    ERROR_APP_SERVER_RET_AUTH_FAIL = 64,
    ERROR_APP_SERVER_RET_CODE_FAIL = 65,
    ERROR_NO_ROOM = 71,
    ERROR_NOT_IN_ROOM = 72,
    ERROR_ALREADY_IN_STAGE = 73,
    ERROR_ALREADY_IN_QUEUE = 74,
    ERROR_ENTER_STAGE_FAIL = 75,
    ERROR_ENTER_STAGE_TIMEOUT = 76,
    ERROR_NOT_IN_STAGE = 77,
    ERROR_INVITER_NOT_IN_UE = 80,
    ERROR_INVITEE_NOT_IN_STAGE = 81,
    ERROR_INVITE_CONTEXT_NOT_EXIST = 82,
    ERROR_INVITEE_NOT_YOU = 83
}

/** eClientPID enum. */
export enum eClientPID {
    NOT_USE_CID = 0,
    ClientHeartBeat = 1,
    LoginReq = 101,
    EnterRoomReq = 201,
    LeaveRoomReq = 203,
    DissolveRoomReq = 301,
    QuitRoomReq = 302,
    KickUserOutRoom = 303,
    ChangeRoomNameReq = 311,
    MuteUserReq = 321,
    RoomSetMaxStageCountReq = 331,
    ClientLogReq = 500,
    EnterStageReq = 501,
    LeaveStageReq = 503,
    LeaveQueueReq = 506,
    LeaveUeReq = 509,
    ReEnterStageReq = 510,
    UpdateEnterStageContextReq = 511,
    MultiActionReq = 512,
    MultiActionReply = 516,
    PlayAnimationReq = 1001,
    ChangeGarmentReq = 1002,
    TouchScreenReq = 1003,
    ChangeGarmentSizeReq = 1004,
    QueryCurrencyReq = 1005,
    ChangeRtcStateReq = 1006,
    LatencyReq = 1007,
    ChangeMapReq = 1008,
    HeatMapReq = 1009,
    GetImagesInfoReq = 1012,
    HeartBeatReq = 1111
}

/** eServerPID enum. */
export enum eServerPID {
    NOT_USE_SID = 0,
    ServerHeartBeat = 1001,
    LoginAsw = 1101,
    LoginOtherPush = 1105,
    SceneChangePush = 1109,
    HeartBeatAsw = 1111,
    EnterRoomAsw = 1201,
    EnterRoomPush = 1202,
    LeaveRoomAsw = 1203,
    LeaveRoomPush = 1204,
    DissolveRoomAsw = 1205,
    DissolveRoomPush = 1206,
    QuitRoomAsw = 1207,
    QuitRoomPush = 1208,
    KickUserOutRoomPush = 1209,
    KickUserOutRoomAsw = 1303,
    ChangeRoomNameAsw = 1311,
    ChangeRoomNamePush = 1312,
    MuteUserAsw = 1321,
    MuteUserPush = 1322,
    RoomSetMaxStageCountAsw = 1331,
    RoomSetMaxStageCountPush = 1332,
    EnterStageAsw = 1501,
    EnterStagePush = 1502,
    LeaveStageAsw = 1503,
    LeaveStagePush = 1504,
    StageQueueInfoPush = 1505,
    LeaveQueueAsw = 1506,
    KickOutStagePush = 1507,
    LeaveUeAsw = 1509,
    UpdateEnterStageContextAsw = 1511,
    MultiActionAsw = 1512,
    MultiActionInvitePush = 1515,
    MultiActionReplyAsw = 1516,
    MultiActionReplyResult = 1517,
    LeaveUePush = 1521,
    StageStatusChangePush = 1522,
    PlayAnimationPush = 11001,
    ChangeGarmentPush = 11002,
    TouchScreenPush = 11003,
    QueryCurrencyPush = 11004,
    ChangeRtcStatePush = 11005,
    KickUserOutStagePush = 11006,
    LatencyPush = 11007,
    ChangeMapPush = 11008,
    HeatMapPush = 11009
}

/** Represents a oHeartBeatReq. */
export class oHeartBeatReq implements IoHeartBeatReq {

    /**
     * Constructs a new oHeartBeatReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoHeartBeatReq);

    /** oHeartBeatReq timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new oHeartBeatReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oHeartBeatReq instance
     */
    public static create(properties?: IoHeartBeatReq): oHeartBeatReq;

    /**
     * Encodes the specified oHeartBeatReq message. Does not implicitly {@link oHeartBeatReq.verify|verify} messages.
     * @param message oHeartBeatReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoHeartBeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oHeartBeatReq message, length delimited. Does not implicitly {@link oHeartBeatReq.verify|verify} messages.
     * @param message oHeartBeatReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoHeartBeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oHeartBeatReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oHeartBeatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oHeartBeatReq;

    /**
     * Decodes a oHeartBeatReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oHeartBeatReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oHeartBeatReq;

    /**
     * Verifies a oHeartBeatReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oHeartBeatReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oHeartBeatReq
     */
    public static fromObject(object: { [k: string]: any }): oHeartBeatReq;

    /**
     * Creates a plain object from a oHeartBeatReq message. Also converts values to other types if specified.
     * @param message oHeartBeatReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oHeartBeatReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oHeartBeatReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oHeartBeatReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oHeartBeatAsw. */
export class oHeartBeatAsw implements IoHeartBeatAsw {

    /**
     * Constructs a new oHeartBeatAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoHeartBeatAsw);

    /** oHeartBeatAsw timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new oHeartBeatAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oHeartBeatAsw instance
     */
    public static create(properties?: IoHeartBeatAsw): oHeartBeatAsw;

    /**
     * Encodes the specified oHeartBeatAsw message. Does not implicitly {@link oHeartBeatAsw.verify|verify} messages.
     * @param message oHeartBeatAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoHeartBeatAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oHeartBeatAsw message, length delimited. Does not implicitly {@link oHeartBeatAsw.verify|verify} messages.
     * @param message oHeartBeatAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoHeartBeatAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oHeartBeatAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oHeartBeatAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oHeartBeatAsw;

    /**
     * Decodes a oHeartBeatAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oHeartBeatAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oHeartBeatAsw;

    /**
     * Verifies a oHeartBeatAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oHeartBeatAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oHeartBeatAsw
     */
    public static fromObject(object: { [k: string]: any }): oHeartBeatAsw;

    /**
     * Creates a plain object from a oHeartBeatAsw message. Also converts values to other types if specified.
     * @param message oHeartBeatAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oHeartBeatAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oHeartBeatAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oHeartBeatAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oClientLogReq. */
export class oClientLogReq implements IoClientLogReq {

    /**
     * Constructs a new oClientLogReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoClientLogReq);

    /** oClientLogReq log. */
    public log: string;

    /**
     * Creates a new oClientLogReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oClientLogReq instance
     */
    public static create(properties?: IoClientLogReq): oClientLogReq;

    /**
     * Encodes the specified oClientLogReq message. Does not implicitly {@link oClientLogReq.verify|verify} messages.
     * @param message oClientLogReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoClientLogReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oClientLogReq message, length delimited. Does not implicitly {@link oClientLogReq.verify|verify} messages.
     * @param message oClientLogReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoClientLogReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oClientLogReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oClientLogReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oClientLogReq;

    /**
     * Decodes a oClientLogReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oClientLogReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oClientLogReq;

    /**
     * Verifies a oClientLogReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oClientLogReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oClientLogReq
     */
    public static fromObject(object: { [k: string]: any }): oClientLogReq;

    /**
     * Creates a plain object from a oClientLogReq message. Also converts values to other types if specified.
     * @param message oClientLogReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oClientLogReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oClientLogReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oClientLogReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oClientHeartBeat. */
export class oClientHeartBeat implements IoClientHeartBeat {

    /**
     * Constructs a new oClientHeartBeat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoClientHeartBeat);

    /** oClientHeartBeat seq. */
    public seq: (number|Long);

    /** oClientHeartBeat cTimestamp. */
    public cTimestamp: (number|Long);

    /** oClientHeartBeat uid. */
    public uid: (number|Long);

    /** oClientHeartBeat room. */
    public room: (number|Long);

    /** oClientHeartBeat delay. */
    public delay: (number|Long);

    /**
     * Creates a new oClientHeartBeat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oClientHeartBeat instance
     */
    public static create(properties?: IoClientHeartBeat): oClientHeartBeat;

    /**
     * Encodes the specified oClientHeartBeat message. Does not implicitly {@link oClientHeartBeat.verify|verify} messages.
     * @param message oClientHeartBeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoClientHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oClientHeartBeat message, length delimited. Does not implicitly {@link oClientHeartBeat.verify|verify} messages.
     * @param message oClientHeartBeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoClientHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oClientHeartBeat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oClientHeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oClientHeartBeat;

    /**
     * Decodes a oClientHeartBeat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oClientHeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oClientHeartBeat;

    /**
     * Verifies a oClientHeartBeat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oClientHeartBeat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oClientHeartBeat
     */
    public static fromObject(object: { [k: string]: any }): oClientHeartBeat;

    /**
     * Creates a plain object from a oClientHeartBeat message. Also converts values to other types if specified.
     * @param message oClientHeartBeat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oClientHeartBeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oClientHeartBeat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oClientHeartBeat
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oCustomInfo. */
export class oCustomInfo implements IoCustomInfo {

    /**
     * Constructs a new oCustomInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoCustomInfo);

    /** oCustomInfo type. */
    public type: (number|Long);

    /** oCustomInfo uid. */
    public uid: (number|Long);

    /** oCustomInfo room. */
    public room: (number|Long);

    /** oCustomInfo stage. */
    public stage: (number|Long);

    /**
     * Creates a new oCustomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oCustomInfo instance
     */
    public static create(properties?: IoCustomInfo): oCustomInfo;

    /**
     * Encodes the specified oCustomInfo message. Does not implicitly {@link oCustomInfo.verify|verify} messages.
     * @param message oCustomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoCustomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oCustomInfo message, length delimited. Does not implicitly {@link oCustomInfo.verify|verify} messages.
     * @param message oCustomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoCustomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oCustomInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oCustomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oCustomInfo;

    /**
     * Decodes a oCustomInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oCustomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oCustomInfo;

    /**
     * Verifies a oCustomInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oCustomInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oCustomInfo
     */
    public static fromObject(object: { [k: string]: any }): oCustomInfo;

    /**
     * Creates a plain object from a oCustomInfo message. Also converts values to other types if specified.
     * @param message oCustomInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oCustomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oCustomInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oCustomInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oServerHeartBeat. */
export class oServerHeartBeat implements IoServerHeartBeat {

    /**
     * Constructs a new oServerHeartBeat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoServerHeartBeat);

    /** oServerHeartBeat seq. */
    public seq: (number|Long);

    /** oServerHeartBeat cTimestamp. */
    public cTimestamp: (number|Long);

    /** oServerHeartBeat sTimestamp. */
    public sTimestamp: (number|Long);

    /** oServerHeartBeat uid. */
    public uid: (number|Long);

    /** oServerHeartBeat room. */
    public room: (number|Long);

    /**
     * Creates a new oServerHeartBeat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oServerHeartBeat instance
     */
    public static create(properties?: IoServerHeartBeat): oServerHeartBeat;

    /**
     * Encodes the specified oServerHeartBeat message. Does not implicitly {@link oServerHeartBeat.verify|verify} messages.
     * @param message oServerHeartBeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoServerHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oServerHeartBeat message, length delimited. Does not implicitly {@link oServerHeartBeat.verify|verify} messages.
     * @param message oServerHeartBeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoServerHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oServerHeartBeat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oServerHeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oServerHeartBeat;

    /**
     * Decodes a oServerHeartBeat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oServerHeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oServerHeartBeat;

    /**
     * Verifies a oServerHeartBeat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oServerHeartBeat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oServerHeartBeat
     */
    public static fromObject(object: { [k: string]: any }): oServerHeartBeat;

    /**
     * Creates a plain object from a oServerHeartBeat message. Also converts values to other types if specified.
     * @param message oServerHeartBeat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oServerHeartBeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oServerHeartBeat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oServerHeartBeat
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLoginReq. */
export class oLoginReq implements IoLoginReq {

    /**
     * Constructs a new oLoginReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLoginReq);

    /** oLoginReq account. */
    public account: (number|Long);

    /** oLoginReq token. */
    public token: string;

    /** oLoginReq insToken. */
    public insToken: string;

    /**
     * Creates a new oLoginReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLoginReq instance
     */
    public static create(properties?: IoLoginReq): oLoginReq;

    /**
     * Encodes the specified oLoginReq message. Does not implicitly {@link oLoginReq.verify|verify} messages.
     * @param message oLoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLoginReq message, length delimited. Does not implicitly {@link oLoginReq.verify|verify} messages.
     * @param message oLoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLoginReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLoginReq;

    /**
     * Decodes a oLoginReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLoginReq;

    /**
     * Verifies a oLoginReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLoginReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLoginReq
     */
    public static fromObject(object: { [k: string]: any }): oLoginReq;

    /**
     * Creates a plain object from a oLoginReq message. Also converts values to other types if specified.
     * @param message oLoginReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLoginReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLoginReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLoginAsw. */
export class oLoginAsw implements IoLoginAsw {

    /**
     * Constructs a new oLoginAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLoginAsw);

    /** oLoginAsw code. */
    public code: eError;

    /**
     * Creates a new oLoginAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLoginAsw instance
     */
    public static create(properties?: IoLoginAsw): oLoginAsw;

    /**
     * Encodes the specified oLoginAsw message. Does not implicitly {@link oLoginAsw.verify|verify} messages.
     * @param message oLoginAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLoginAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLoginAsw message, length delimited. Does not implicitly {@link oLoginAsw.verify|verify} messages.
     * @param message oLoginAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLoginAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLoginAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLoginAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLoginAsw;

    /**
     * Decodes a oLoginAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLoginAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLoginAsw;

    /**
     * Verifies a oLoginAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLoginAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLoginAsw
     */
    public static fromObject(object: { [k: string]: any }): oLoginAsw;

    /**
     * Creates a plain object from a oLoginAsw message. Also converts values to other types if specified.
     * @param message oLoginAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLoginAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLoginAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLoginAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLoginOtherPush. */
export class oLoginOtherPush implements IoLoginOtherPush {

    /**
     * Constructs a new oLoginOtherPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLoginOtherPush);

    /**
     * Creates a new oLoginOtherPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLoginOtherPush instance
     */
    public static create(properties?: IoLoginOtherPush): oLoginOtherPush;

    /**
     * Encodes the specified oLoginOtherPush message. Does not implicitly {@link oLoginOtherPush.verify|verify} messages.
     * @param message oLoginOtherPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLoginOtherPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLoginOtherPush message, length delimited. Does not implicitly {@link oLoginOtherPush.verify|verify} messages.
     * @param message oLoginOtherPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLoginOtherPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLoginOtherPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLoginOtherPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLoginOtherPush;

    /**
     * Decodes a oLoginOtherPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLoginOtherPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLoginOtherPush;

    /**
     * Verifies a oLoginOtherPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLoginOtherPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLoginOtherPush
     */
    public static fromObject(object: { [k: string]: any }): oLoginOtherPush;

    /**
     * Creates a plain object from a oLoginOtherPush message. Also converts values to other types if specified.
     * @param message oLoginOtherPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLoginOtherPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLoginOtherPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLoginOtherPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oSceneChangePush. */
export class oSceneChangePush implements IoSceneChangePush {

    /**
     * Constructs a new oSceneChangePush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoSceneChangePush);

    /** oSceneChangePush scene. */
    public scene: string;

    /**
     * Creates a new oSceneChangePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oSceneChangePush instance
     */
    public static create(properties?: IoSceneChangePush): oSceneChangePush;

    /**
     * Encodes the specified oSceneChangePush message. Does not implicitly {@link oSceneChangePush.verify|verify} messages.
     * @param message oSceneChangePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoSceneChangePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oSceneChangePush message, length delimited. Does not implicitly {@link oSceneChangePush.verify|verify} messages.
     * @param message oSceneChangePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoSceneChangePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oSceneChangePush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oSceneChangePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oSceneChangePush;

    /**
     * Decodes a oSceneChangePush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oSceneChangePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oSceneChangePush;

    /**
     * Verifies a oSceneChangePush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oSceneChangePush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oSceneChangePush
     */
    public static fromObject(object: { [k: string]: any }): oSceneChangePush;

    /**
     * Creates a plain object from a oSceneChangePush message. Also converts values to other types if specified.
     * @param message oSceneChangePush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oSceneChangePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oSceneChangePush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oSceneChangePush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oPlayAnimatonReq. */
export class oPlayAnimatonReq implements IoPlayAnimatonReq {

    /**
     * Constructs a new oPlayAnimatonReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoPlayAnimatonReq);

    /** oPlayAnimatonReq animId. */
    public animId: number;

    /** oPlayAnimatonReq playRate. */
    public playRate: number;

    /** oPlayAnimatonReq isLoop. */
    public isLoop: boolean;

    /**
     * Creates a new oPlayAnimatonReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oPlayAnimatonReq instance
     */
    public static create(properties?: IoPlayAnimatonReq): oPlayAnimatonReq;

    /**
     * Encodes the specified oPlayAnimatonReq message. Does not implicitly {@link oPlayAnimatonReq.verify|verify} messages.
     * @param message oPlayAnimatonReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoPlayAnimatonReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oPlayAnimatonReq message, length delimited. Does not implicitly {@link oPlayAnimatonReq.verify|verify} messages.
     * @param message oPlayAnimatonReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoPlayAnimatonReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oPlayAnimatonReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oPlayAnimatonReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oPlayAnimatonReq;

    /**
     * Decodes a oPlayAnimatonReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oPlayAnimatonReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oPlayAnimatonReq;

    /**
     * Verifies a oPlayAnimatonReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oPlayAnimatonReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oPlayAnimatonReq
     */
    public static fromObject(object: { [k: string]: any }): oPlayAnimatonReq;

    /**
     * Creates a plain object from a oPlayAnimatonReq message. Also converts values to other types if specified.
     * @param message oPlayAnimatonReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oPlayAnimatonReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oPlayAnimatonReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oPlayAnimatonReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oPlayAnimationPush. */
export class oPlayAnimationPush implements IoPlayAnimationPush {

    /**
     * Constructs a new oPlayAnimationPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoPlayAnimationPush);

    /** oPlayAnimationPush code. */
    public code: eError;

    /** oPlayAnimationPush animId. */
    public animId: number;

    /** oPlayAnimationPush playRate. */
    public playRate: number;

    /** oPlayAnimationPush isLoop. */
    public isLoop: boolean;

    /**
     * Creates a new oPlayAnimationPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oPlayAnimationPush instance
     */
    public static create(properties?: IoPlayAnimationPush): oPlayAnimationPush;

    /**
     * Encodes the specified oPlayAnimationPush message. Does not implicitly {@link oPlayAnimationPush.verify|verify} messages.
     * @param message oPlayAnimationPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoPlayAnimationPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oPlayAnimationPush message, length delimited. Does not implicitly {@link oPlayAnimationPush.verify|verify} messages.
     * @param message oPlayAnimationPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoPlayAnimationPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oPlayAnimationPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oPlayAnimationPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oPlayAnimationPush;

    /**
     * Decodes a oPlayAnimationPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oPlayAnimationPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oPlayAnimationPush;

    /**
     * Verifies a oPlayAnimationPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oPlayAnimationPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oPlayAnimationPush
     */
    public static fromObject(object: { [k: string]: any }): oPlayAnimationPush;

    /**
     * Creates a plain object from a oPlayAnimationPush message. Also converts values to other types if specified.
     * @param message oPlayAnimationPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oPlayAnimationPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oPlayAnimationPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oPlayAnimationPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oChangeGarmentReq. */
export class oChangeGarmentReq implements IoChangeGarmentReq {

    /**
     * Constructs a new oChangeGarmentReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoChangeGarmentReq);

    /** oChangeGarmentReq garment1Id. */
    public garment1Id: (number|Long);

    /** oChangeGarmentReq garment2Id. */
    public garment2Id: (number|Long);

    /** oChangeGarmentReq garment3Id. */
    public garment3Id: (number|Long);

    /** oChangeGarmentReq garment1Size. */
    public garment1Size: number;

    /** oChangeGarmentReq garment2Size. */
    public garment2Size: number;

    /** oChangeGarmentReq garment3Size. */
    public garment3Size: number;

    /**
     * Creates a new oChangeGarmentReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oChangeGarmentReq instance
     */
    public static create(properties?: IoChangeGarmentReq): oChangeGarmentReq;

    /**
     * Encodes the specified oChangeGarmentReq message. Does not implicitly {@link oChangeGarmentReq.verify|verify} messages.
     * @param message oChangeGarmentReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoChangeGarmentReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oChangeGarmentReq message, length delimited. Does not implicitly {@link oChangeGarmentReq.verify|verify} messages.
     * @param message oChangeGarmentReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoChangeGarmentReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oChangeGarmentReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oChangeGarmentReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oChangeGarmentReq;

    /**
     * Decodes a oChangeGarmentReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oChangeGarmentReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oChangeGarmentReq;

    /**
     * Verifies a oChangeGarmentReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oChangeGarmentReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oChangeGarmentReq
     */
    public static fromObject(object: { [k: string]: any }): oChangeGarmentReq;

    /**
     * Creates a plain object from a oChangeGarmentReq message. Also converts values to other types if specified.
     * @param message oChangeGarmentReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oChangeGarmentReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oChangeGarmentReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oChangeGarmentReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oChangeGarmentSizeReq. */
export class oChangeGarmentSizeReq implements IoChangeGarmentSizeReq {

    /**
     * Constructs a new oChangeGarmentSizeReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoChangeGarmentSizeReq);

    /** oChangeGarmentSizeReq size. */
    public size: number;

    /**
     * Creates a new oChangeGarmentSizeReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oChangeGarmentSizeReq instance
     */
    public static create(properties?: IoChangeGarmentSizeReq): oChangeGarmentSizeReq;

    /**
     * Encodes the specified oChangeGarmentSizeReq message. Does not implicitly {@link oChangeGarmentSizeReq.verify|verify} messages.
     * @param message oChangeGarmentSizeReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoChangeGarmentSizeReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oChangeGarmentSizeReq message, length delimited. Does not implicitly {@link oChangeGarmentSizeReq.verify|verify} messages.
     * @param message oChangeGarmentSizeReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoChangeGarmentSizeReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oChangeGarmentSizeReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oChangeGarmentSizeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oChangeGarmentSizeReq;

    /**
     * Decodes a oChangeGarmentSizeReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oChangeGarmentSizeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oChangeGarmentSizeReq;

    /**
     * Verifies a oChangeGarmentSizeReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oChangeGarmentSizeReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oChangeGarmentSizeReq
     */
    public static fromObject(object: { [k: string]: any }): oChangeGarmentSizeReq;

    /**
     * Creates a plain object from a oChangeGarmentSizeReq message. Also converts values to other types if specified.
     * @param message oChangeGarmentSizeReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oChangeGarmentSizeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oChangeGarmentSizeReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oChangeGarmentSizeReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ePaymenType enum. */
export enum ePaymenType {
    None = 0,
    RtcVideo = 1,
    RtcVoice = 2,
    PlayAnimation = 3
}

/** Represents a oQueryCurrencyReq. */
export class oQueryCurrencyReq implements IoQueryCurrencyReq {

    /**
     * Constructs a new oQueryCurrencyReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoQueryCurrencyReq);

    /** oQueryCurrencyReq paymentType. */
    public paymentType: ePaymenType;

    /**
     * Creates a new oQueryCurrencyReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oQueryCurrencyReq instance
     */
    public static create(properties?: IoQueryCurrencyReq): oQueryCurrencyReq;

    /**
     * Encodes the specified oQueryCurrencyReq message. Does not implicitly {@link oQueryCurrencyReq.verify|verify} messages.
     * @param message oQueryCurrencyReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoQueryCurrencyReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oQueryCurrencyReq message, length delimited. Does not implicitly {@link oQueryCurrencyReq.verify|verify} messages.
     * @param message oQueryCurrencyReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoQueryCurrencyReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oQueryCurrencyReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oQueryCurrencyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oQueryCurrencyReq;

    /**
     * Decodes a oQueryCurrencyReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oQueryCurrencyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oQueryCurrencyReq;

    /**
     * Verifies a oQueryCurrencyReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oQueryCurrencyReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oQueryCurrencyReq
     */
    public static fromObject(object: { [k: string]: any }): oQueryCurrencyReq;

    /**
     * Creates a plain object from a oQueryCurrencyReq message. Also converts values to other types if specified.
     * @param message oQueryCurrencyReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oQueryCurrencyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oQueryCurrencyReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oQueryCurrencyReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** eRtcType enum. */
export enum eRtcType {
    NoType = 0,
    Video = 1,
    Voice = 2
}

/** Represents a oHeatMapReq. */
export class oHeatMapReq implements IoHeatMapReq {

    /**
     * Constructs a new oHeatMapReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoHeatMapReq);

    /** oHeatMapReq enable. */
    public enable: boolean;

    /**
     * Creates a new oHeatMapReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oHeatMapReq instance
     */
    public static create(properties?: IoHeatMapReq): oHeatMapReq;

    /**
     * Encodes the specified oHeatMapReq message. Does not implicitly {@link oHeatMapReq.verify|verify} messages.
     * @param message oHeatMapReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoHeatMapReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oHeatMapReq message, length delimited. Does not implicitly {@link oHeatMapReq.verify|verify} messages.
     * @param message oHeatMapReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoHeatMapReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oHeatMapReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oHeatMapReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oHeatMapReq;

    /**
     * Decodes a oHeatMapReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oHeatMapReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oHeatMapReq;

    /**
     * Verifies a oHeatMapReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oHeatMapReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oHeatMapReq
     */
    public static fromObject(object: { [k: string]: any }): oHeatMapReq;

    /**
     * Creates a plain object from a oHeatMapReq message. Also converts values to other types if specified.
     * @param message oHeatMapReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oHeatMapReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oHeatMapReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oHeatMapReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oChangeRtcStateReq. */
export class oChangeRtcStateReq implements IoChangeRtcStateReq {

    /**
     * Constructs a new oChangeRtcStateReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoChangeRtcStateReq);

    /** oChangeRtcStateReq type. */
    public type: eRtcType;

    /** oChangeRtcStateReq isOn. */
    public isOn: boolean;

    /**
     * Creates a new oChangeRtcStateReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oChangeRtcStateReq instance
     */
    public static create(properties?: IoChangeRtcStateReq): oChangeRtcStateReq;

    /**
     * Encodes the specified oChangeRtcStateReq message. Does not implicitly {@link oChangeRtcStateReq.verify|verify} messages.
     * @param message oChangeRtcStateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoChangeRtcStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oChangeRtcStateReq message, length delimited. Does not implicitly {@link oChangeRtcStateReq.verify|verify} messages.
     * @param message oChangeRtcStateReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoChangeRtcStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oChangeRtcStateReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oChangeRtcStateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oChangeRtcStateReq;

    /**
     * Decodes a oChangeRtcStateReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oChangeRtcStateReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oChangeRtcStateReq;

    /**
     * Verifies a oChangeRtcStateReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oChangeRtcStateReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oChangeRtcStateReq
     */
    public static fromObject(object: { [k: string]: any }): oChangeRtcStateReq;

    /**
     * Creates a plain object from a oChangeRtcStateReq message. Also converts values to other types if specified.
     * @param message oChangeRtcStateReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oChangeRtcStateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oChangeRtcStateReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oChangeRtcStateReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oChangeMapReq. */
export class oChangeMapReq implements IoChangeMapReq {

    /**
     * Constructs a new oChangeMapReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoChangeMapReq);

    /** oChangeMapReq mapName. */
    public mapName: string;

    /**
     * Creates a new oChangeMapReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oChangeMapReq instance
     */
    public static create(properties?: IoChangeMapReq): oChangeMapReq;

    /**
     * Encodes the specified oChangeMapReq message. Does not implicitly {@link oChangeMapReq.verify|verify} messages.
     * @param message oChangeMapReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoChangeMapReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oChangeMapReq message, length delimited. Does not implicitly {@link oChangeMapReq.verify|verify} messages.
     * @param message oChangeMapReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoChangeMapReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oChangeMapReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oChangeMapReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oChangeMapReq;

    /**
     * Decodes a oChangeMapReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oChangeMapReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oChangeMapReq;

    /**
     * Verifies a oChangeMapReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oChangeMapReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oChangeMapReq
     */
    public static fromObject(object: { [k: string]: any }): oChangeMapReq;

    /**
     * Creates a plain object from a oChangeMapReq message. Also converts values to other types if specified.
     * @param message oChangeMapReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oChangeMapReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oChangeMapReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oChangeMapReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oChangeRtcStatePush. */
export class oChangeRtcStatePush implements IoChangeRtcStatePush {

    /**
     * Constructs a new oChangeRtcStatePush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoChangeRtcStatePush);

    /** oChangeRtcStatePush code. */
    public code: eError;

    /** oChangeRtcStatePush type. */
    public type: eRtcType;

    /** oChangeRtcStatePush isOn. */
    public isOn: boolean;

    /**
     * Creates a new oChangeRtcStatePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oChangeRtcStatePush instance
     */
    public static create(properties?: IoChangeRtcStatePush): oChangeRtcStatePush;

    /**
     * Encodes the specified oChangeRtcStatePush message. Does not implicitly {@link oChangeRtcStatePush.verify|verify} messages.
     * @param message oChangeRtcStatePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoChangeRtcStatePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oChangeRtcStatePush message, length delimited. Does not implicitly {@link oChangeRtcStatePush.verify|verify} messages.
     * @param message oChangeRtcStatePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoChangeRtcStatePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oChangeRtcStatePush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oChangeRtcStatePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oChangeRtcStatePush;

    /**
     * Decodes a oChangeRtcStatePush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oChangeRtcStatePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oChangeRtcStatePush;

    /**
     * Verifies a oChangeRtcStatePush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oChangeRtcStatePush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oChangeRtcStatePush
     */
    public static fromObject(object: { [k: string]: any }): oChangeRtcStatePush;

    /**
     * Creates a plain object from a oChangeRtcStatePush message. Also converts values to other types if specified.
     * @param message oChangeRtcStatePush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oChangeRtcStatePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oChangeRtcStatePush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oChangeRtcStatePush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oQueryCurrencyPush. */
export class oQueryCurrencyPush implements IoQueryCurrencyPush {

    /**
     * Constructs a new oQueryCurrencyPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoQueryCurrencyPush);

    /** oQueryCurrencyPush code. */
    public code: eError;

    /** oQueryCurrencyPush Currency. */
    public Currency: number;

    /** oQueryCurrencyPush paymentType. */
    public paymentType: ePaymenType;

    /** oQueryCurrencyPush unitPrice. */
    public unitPrice: number;

    /**
     * Creates a new oQueryCurrencyPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oQueryCurrencyPush instance
     */
    public static create(properties?: IoQueryCurrencyPush): oQueryCurrencyPush;

    /**
     * Encodes the specified oQueryCurrencyPush message. Does not implicitly {@link oQueryCurrencyPush.verify|verify} messages.
     * @param message oQueryCurrencyPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoQueryCurrencyPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oQueryCurrencyPush message, length delimited. Does not implicitly {@link oQueryCurrencyPush.verify|verify} messages.
     * @param message oQueryCurrencyPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoQueryCurrencyPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oQueryCurrencyPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oQueryCurrencyPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oQueryCurrencyPush;

    /**
     * Decodes a oQueryCurrencyPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oQueryCurrencyPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oQueryCurrencyPush;

    /**
     * Verifies a oQueryCurrencyPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oQueryCurrencyPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oQueryCurrencyPush
     */
    public static fromObject(object: { [k: string]: any }): oQueryCurrencyPush;

    /**
     * Creates a plain object from a oQueryCurrencyPush message. Also converts values to other types if specified.
     * @param message oQueryCurrencyPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oQueryCurrencyPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oQueryCurrencyPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oQueryCurrencyPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** eKickUserOutStageReason enum. */
export enum eKickUserOutStageReason {
    Exit = 0,
    OutOfCurrency = 1
}

/** Represents a oKickUserOutStagePush. */
export class oKickUserOutStagePush implements IoKickUserOutStagePush {

    /**
     * Constructs a new oKickUserOutStagePush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoKickUserOutStagePush);

    /** oKickUserOutStagePush kickReason. */
    public kickReason: eKickUserOutStageReason;

    /** oKickUserOutStagePush userid. */
    public userid: (number|Long);

    /** oKickUserOutStagePush countdown. */
    public countdown: number;

    /**
     * Creates a new oKickUserOutStagePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oKickUserOutStagePush instance
     */
    public static create(properties?: IoKickUserOutStagePush): oKickUserOutStagePush;

    /**
     * Encodes the specified oKickUserOutStagePush message. Does not implicitly {@link oKickUserOutStagePush.verify|verify} messages.
     * @param message oKickUserOutStagePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoKickUserOutStagePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oKickUserOutStagePush message, length delimited. Does not implicitly {@link oKickUserOutStagePush.verify|verify} messages.
     * @param message oKickUserOutStagePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoKickUserOutStagePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oKickUserOutStagePush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oKickUserOutStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oKickUserOutStagePush;

    /**
     * Decodes a oKickUserOutStagePush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oKickUserOutStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oKickUserOutStagePush;

    /**
     * Verifies a oKickUserOutStagePush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oKickUserOutStagePush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oKickUserOutStagePush
     */
    public static fromObject(object: { [k: string]: any }): oKickUserOutStagePush;

    /**
     * Creates a plain object from a oKickUserOutStagePush message. Also converts values to other types if specified.
     * @param message oKickUserOutStagePush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oKickUserOutStagePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oKickUserOutStagePush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oKickUserOutStagePush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oChangeMapPush. */
export class oChangeMapPush implements IoChangeMapPush {

    /**
     * Constructs a new oChangeMapPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoChangeMapPush);

    /** oChangeMapPush code. */
    public code: eError;

    /** oChangeMapPush mapName. */
    public mapName: string;

    /**
     * Creates a new oChangeMapPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oChangeMapPush instance
     */
    public static create(properties?: IoChangeMapPush): oChangeMapPush;

    /**
     * Encodes the specified oChangeMapPush message. Does not implicitly {@link oChangeMapPush.verify|verify} messages.
     * @param message oChangeMapPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoChangeMapPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oChangeMapPush message, length delimited. Does not implicitly {@link oChangeMapPush.verify|verify} messages.
     * @param message oChangeMapPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoChangeMapPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oChangeMapPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oChangeMapPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oChangeMapPush;

    /**
     * Decodes a oChangeMapPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oChangeMapPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oChangeMapPush;

    /**
     * Verifies a oChangeMapPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oChangeMapPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oChangeMapPush
     */
    public static fromObject(object: { [k: string]: any }): oChangeMapPush;

    /**
     * Creates a plain object from a oChangeMapPush message. Also converts values to other types if specified.
     * @param message oChangeMapPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oChangeMapPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oChangeMapPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oChangeMapPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oGarment. */
export class oGarment implements IoGarment {

    /**
     * Constructs a new oGarment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoGarment);

    /** oGarment id. */
    public id: (number|Long);

    /** oGarment name. */
    public name: string;

    /** oGarment icon. */
    public icon: string;

    /**
     * Creates a new oGarment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oGarment instance
     */
    public static create(properties?: IoGarment): oGarment;

    /**
     * Encodes the specified oGarment message. Does not implicitly {@link oGarment.verify|verify} messages.
     * @param message oGarment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoGarment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oGarment message, length delimited. Does not implicitly {@link oGarment.verify|verify} messages.
     * @param message oGarment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoGarment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oGarment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oGarment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oGarment;

    /**
     * Decodes a oGarment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oGarment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oGarment;

    /**
     * Verifies a oGarment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oGarment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oGarment
     */
    public static fromObject(object: { [k: string]: any }): oGarment;

    /**
     * Creates a plain object from a oGarment message. Also converts values to other types if specified.
     * @param message oGarment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oGarment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oGarment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oGarment
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oChangeGarmentPush. */
export class oChangeGarmentPush implements IoChangeGarmentPush {

    /**
     * Constructs a new oChangeGarmentPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoChangeGarmentPush);

    /** oChangeGarmentPush code. */
    public code: eError;

    /** oChangeGarmentPush garment1. */
    public garment1?: (IoGarment|null);

    /** oChangeGarmentPush garment2. */
    public garment2?: (IoGarment|null);

    /** oChangeGarmentPush garment3. */
    public garment3?: (IoGarment|null);

    /**
     * Creates a new oChangeGarmentPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oChangeGarmentPush instance
     */
    public static create(properties?: IoChangeGarmentPush): oChangeGarmentPush;

    /**
     * Encodes the specified oChangeGarmentPush message. Does not implicitly {@link oChangeGarmentPush.verify|verify} messages.
     * @param message oChangeGarmentPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoChangeGarmentPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oChangeGarmentPush message, length delimited. Does not implicitly {@link oChangeGarmentPush.verify|verify} messages.
     * @param message oChangeGarmentPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoChangeGarmentPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oChangeGarmentPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oChangeGarmentPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oChangeGarmentPush;

    /**
     * Decodes a oChangeGarmentPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oChangeGarmentPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oChangeGarmentPush;

    /**
     * Verifies a oChangeGarmentPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oChangeGarmentPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oChangeGarmentPush
     */
    public static fromObject(object: { [k: string]: any }): oChangeGarmentPush;

    /**
     * Creates a plain object from a oChangeGarmentPush message. Also converts values to other types if specified.
     * @param message oChangeGarmentPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oChangeGarmentPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oChangeGarmentPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oChangeGarmentPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLatencyReq. */
export class oLatencyReq implements IoLatencyReq {

    /**
     * Constructs a new oLatencyReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLatencyReq);

    /** oLatencyReq timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new oLatencyReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLatencyReq instance
     */
    public static create(properties?: IoLatencyReq): oLatencyReq;

    /**
     * Encodes the specified oLatencyReq message. Does not implicitly {@link oLatencyReq.verify|verify} messages.
     * @param message oLatencyReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLatencyReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLatencyReq message, length delimited. Does not implicitly {@link oLatencyReq.verify|verify} messages.
     * @param message oLatencyReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLatencyReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLatencyReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLatencyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLatencyReq;

    /**
     * Decodes a oLatencyReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLatencyReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLatencyReq;

    /**
     * Verifies a oLatencyReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLatencyReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLatencyReq
     */
    public static fromObject(object: { [k: string]: any }): oLatencyReq;

    /**
     * Creates a plain object from a oLatencyReq message. Also converts values to other types if specified.
     * @param message oLatencyReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLatencyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLatencyReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLatencyReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLatencyPush. */
export class oLatencyPush implements IoLatencyPush {

    /**
     * Constructs a new oLatencyPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLatencyPush);

    /** oLatencyPush timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new oLatencyPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLatencyPush instance
     */
    public static create(properties?: IoLatencyPush): oLatencyPush;

    /**
     * Encodes the specified oLatencyPush message. Does not implicitly {@link oLatencyPush.verify|verify} messages.
     * @param message oLatencyPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLatencyPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLatencyPush message, length delimited. Does not implicitly {@link oLatencyPush.verify|verify} messages.
     * @param message oLatencyPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLatencyPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLatencyPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLatencyPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLatencyPush;

    /**
     * Decodes a oLatencyPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLatencyPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLatencyPush;

    /**
     * Verifies a oLatencyPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLatencyPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLatencyPush
     */
    public static fromObject(object: { [k: string]: any }): oLatencyPush;

    /**
     * Creates a plain object from a oLatencyPush message. Also converts values to other types if specified.
     * @param message oLatencyPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLatencyPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLatencyPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLatencyPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** eTouchType enum. */
export enum eTouchType {
    click = 0,
    rotate = 1,
    scale = 2
}

/** Represents a oVector3. */
export class oVector3 implements IoVector3 {

    /**
     * Constructs a new oVector3.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoVector3);

    /** oVector3 x. */
    public x: number;

    /** oVector3 y. */
    public y: number;

    /** oVector3 z. */
    public z: number;

    /**
     * Creates a new oVector3 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oVector3 instance
     */
    public static create(properties?: IoVector3): oVector3;

    /**
     * Encodes the specified oVector3 message. Does not implicitly {@link oVector3.verify|verify} messages.
     * @param message oVector3 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoVector3, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oVector3 message, length delimited. Does not implicitly {@link oVector3.verify|verify} messages.
     * @param message oVector3 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoVector3, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oVector3 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oVector3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oVector3;

    /**
     * Decodes a oVector3 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oVector3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oVector3;

    /**
     * Verifies a oVector3 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oVector3 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oVector3
     */
    public static fromObject(object: { [k: string]: any }): oVector3;

    /**
     * Creates a plain object from a oVector3 message. Also converts values to other types if specified.
     * @param message oVector3
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oVector3, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oVector3 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oVector3
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oTouchScreenReq. */
export class oTouchScreenReq implements IoTouchScreenReq {

    /**
     * Constructs a new oTouchScreenReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoTouchScreenReq);

    /** oTouchScreenReq touchType. */
    public touchType: eTouchType;

    /** oTouchScreenReq pos. */
    public pos?: (IoVector3|null);

    /** oTouchScreenReq timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new oTouchScreenReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oTouchScreenReq instance
     */
    public static create(properties?: IoTouchScreenReq): oTouchScreenReq;

    /**
     * Encodes the specified oTouchScreenReq message. Does not implicitly {@link oTouchScreenReq.verify|verify} messages.
     * @param message oTouchScreenReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoTouchScreenReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oTouchScreenReq message, length delimited. Does not implicitly {@link oTouchScreenReq.verify|verify} messages.
     * @param message oTouchScreenReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoTouchScreenReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oTouchScreenReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oTouchScreenReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oTouchScreenReq;

    /**
     * Decodes a oTouchScreenReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oTouchScreenReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oTouchScreenReq;

    /**
     * Verifies a oTouchScreenReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oTouchScreenReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oTouchScreenReq
     */
    public static fromObject(object: { [k: string]: any }): oTouchScreenReq;

    /**
     * Creates a plain object from a oTouchScreenReq message. Also converts values to other types if specified.
     * @param message oTouchScreenReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oTouchScreenReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oTouchScreenReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oTouchScreenReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oTouchScreenPush. */
export class oTouchScreenPush implements IoTouchScreenPush {

    /**
     * Constructs a new oTouchScreenPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoTouchScreenPush);

    /** oTouchScreenPush timestamp. */
    public timestamp: (number|Long);

    /** oTouchScreenPush latency. */
    public latency: number;

    /**
     * Creates a new oTouchScreenPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oTouchScreenPush instance
     */
    public static create(properties?: IoTouchScreenPush): oTouchScreenPush;

    /**
     * Encodes the specified oTouchScreenPush message. Does not implicitly {@link oTouchScreenPush.verify|verify} messages.
     * @param message oTouchScreenPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoTouchScreenPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oTouchScreenPush message, length delimited. Does not implicitly {@link oTouchScreenPush.verify|verify} messages.
     * @param message oTouchScreenPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoTouchScreenPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oTouchScreenPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oTouchScreenPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oTouchScreenPush;

    /**
     * Decodes a oTouchScreenPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oTouchScreenPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oTouchScreenPush;

    /**
     * Verifies a oTouchScreenPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oTouchScreenPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oTouchScreenPush
     */
    public static fromObject(object: { [k: string]: any }): oTouchScreenPush;

    /**
     * Creates a plain object from a oTouchScreenPush message. Also converts values to other types if specified.
     * @param message oTouchScreenPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oTouchScreenPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oTouchScreenPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oTouchScreenPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oEnterRoomReq. */
export class oEnterRoomReq implements IoEnterRoomReq {

    /**
     * Constructs a new oEnterRoomReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoEnterRoomReq);

    /** oEnterRoomReq roomId. */
    public roomId: (number|Long);

    /**
     * Creates a new oEnterRoomReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oEnterRoomReq instance
     */
    public static create(properties?: IoEnterRoomReq): oEnterRoomReq;

    /**
     * Encodes the specified oEnterRoomReq message. Does not implicitly {@link oEnterRoomReq.verify|verify} messages.
     * @param message oEnterRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oEnterRoomReq message, length delimited. Does not implicitly {@link oEnterRoomReq.verify|verify} messages.
     * @param message oEnterRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoEnterRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oEnterRoomReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oEnterRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oEnterRoomReq;

    /**
     * Decodes a oEnterRoomReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oEnterRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oEnterRoomReq;

    /**
     * Verifies a oEnterRoomReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oEnterRoomReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oEnterRoomReq
     */
    public static fromObject(object: { [k: string]: any }): oEnterRoomReq;

    /**
     * Creates a plain object from a oEnterRoomReq message. Also converts values to other types if specified.
     * @param message oEnterRoomReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oEnterRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oEnterRoomReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oEnterRoomReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** eStageType enum. */
export enum eStageType {
    StageTypeFree = 0,
    StageTypeWaitEnter = 1,
    StageTypeTryEnter = 2,
    StageTypeWorking = 3,
    StageTypeOff = 4
}

/** Represents a oStageInfo. */
export class oStageInfo implements IoStageInfo {

    /**
     * Constructs a new oStageInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoStageInfo);

    /** oStageInfo stageId. */
    public stageId: (number|Long);

    /** oStageInfo onStageUserId. */
    public onStageUserId: (number|Long);

    /** oStageInfo rtcToken. */
    public rtcToken: string;

    /** oStageInfo stageType. */
    public stageType: eStageType;

    /**
     * Creates a new oStageInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oStageInfo instance
     */
    public static create(properties?: IoStageInfo): oStageInfo;

    /**
     * Encodes the specified oStageInfo message. Does not implicitly {@link oStageInfo.verify|verify} messages.
     * @param message oStageInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoStageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oStageInfo message, length delimited. Does not implicitly {@link oStageInfo.verify|verify} messages.
     * @param message oStageInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoStageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oStageInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oStageInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oStageInfo;

    /**
     * Decodes a oStageInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oStageInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oStageInfo;

    /**
     * Verifies a oStageInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oStageInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oStageInfo
     */
    public static fromObject(object: { [k: string]: any }): oStageInfo;

    /**
     * Creates a plain object from a oStageInfo message. Also converts values to other types if specified.
     * @param message oStageInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oStageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oStageInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oStageInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oEnterRoomAsw. */
export class oEnterRoomAsw implements IoEnterRoomAsw {

    /**
     * Constructs a new oEnterRoomAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoEnterRoomAsw);

    /** oEnterRoomAsw code. */
    public code: eError;

    /** oEnterRoomAsw roomId. */
    public roomId: (number|Long);

    /** oEnterRoomAsw onlineUsers. */
    public onlineUsers: (number|Long)[];

    /** oEnterRoomAsw rtcToken. */
    public rtcToken: string;

    /** oEnterRoomAsw stageRtcIds. */
    public stageRtcIds: IoStageInfo[];

    /** oEnterRoomAsw queueUserIds. */
    public queueUserIds: IoStageInfo[];

    /** oEnterRoomAsw stageCount. */
    public stageCount: number;

    /** oEnterRoomAsw scene. */
    public scene: string;

    /** oEnterRoomAsw allMute. */
    public allMute: boolean;

    /** oEnterRoomAsw muteUsers. */
    public muteUsers: (number|Long)[];

    /**
     * Creates a new oEnterRoomAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oEnterRoomAsw instance
     */
    public static create(properties?: IoEnterRoomAsw): oEnterRoomAsw;

    /**
     * Encodes the specified oEnterRoomAsw message. Does not implicitly {@link oEnterRoomAsw.verify|verify} messages.
     * @param message oEnterRoomAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoEnterRoomAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oEnterRoomAsw message, length delimited. Does not implicitly {@link oEnterRoomAsw.verify|verify} messages.
     * @param message oEnterRoomAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoEnterRoomAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oEnterRoomAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oEnterRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oEnterRoomAsw;

    /**
     * Decodes a oEnterRoomAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oEnterRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oEnterRoomAsw;

    /**
     * Verifies a oEnterRoomAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oEnterRoomAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oEnterRoomAsw
     */
    public static fromObject(object: { [k: string]: any }): oEnterRoomAsw;

    /**
     * Creates a plain object from a oEnterRoomAsw message. Also converts values to other types if specified.
     * @param message oEnterRoomAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oEnterRoomAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oEnterRoomAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oEnterRoomAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oEnterRoomPush. */
export class oEnterRoomPush implements IoEnterRoomPush {

    /**
     * Constructs a new oEnterRoomPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoEnterRoomPush);

    /** oEnterRoomPush enterUserId. */
    public enterUserId: (number|Long);

    /**
     * Creates a new oEnterRoomPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oEnterRoomPush instance
     */
    public static create(properties?: IoEnterRoomPush): oEnterRoomPush;

    /**
     * Encodes the specified oEnterRoomPush message. Does not implicitly {@link oEnterRoomPush.verify|verify} messages.
     * @param message oEnterRoomPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoEnterRoomPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oEnterRoomPush message, length delimited. Does not implicitly {@link oEnterRoomPush.verify|verify} messages.
     * @param message oEnterRoomPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoEnterRoomPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oEnterRoomPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oEnterRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oEnterRoomPush;

    /**
     * Decodes a oEnterRoomPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oEnterRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oEnterRoomPush;

    /**
     * Verifies a oEnterRoomPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oEnterRoomPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oEnterRoomPush
     */
    public static fromObject(object: { [k: string]: any }): oEnterRoomPush;

    /**
     * Creates a plain object from a oEnterRoomPush message. Also converts values to other types if specified.
     * @param message oEnterRoomPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oEnterRoomPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oEnterRoomPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oEnterRoomPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLeaveRoomReq. */
export class oLeaveRoomReq implements IoLeaveRoomReq {

    /**
     * Constructs a new oLeaveRoomReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLeaveRoomReq);

    /** oLeaveRoomReq roomId. */
    public roomId: (number|Long);

    /**
     * Creates a new oLeaveRoomReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLeaveRoomReq instance
     */
    public static create(properties?: IoLeaveRoomReq): oLeaveRoomReq;

    /**
     * Encodes the specified oLeaveRoomReq message. Does not implicitly {@link oLeaveRoomReq.verify|verify} messages.
     * @param message oLeaveRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLeaveRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLeaveRoomReq message, length delimited. Does not implicitly {@link oLeaveRoomReq.verify|verify} messages.
     * @param message oLeaveRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLeaveRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLeaveRoomReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLeaveRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLeaveRoomReq;

    /**
     * Decodes a oLeaveRoomReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLeaveRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLeaveRoomReq;

    /**
     * Verifies a oLeaveRoomReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLeaveRoomReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLeaveRoomReq
     */
    public static fromObject(object: { [k: string]: any }): oLeaveRoomReq;

    /**
     * Creates a plain object from a oLeaveRoomReq message. Also converts values to other types if specified.
     * @param message oLeaveRoomReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLeaveRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLeaveRoomReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLeaveRoomReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLeaveRoomAsw. */
export class oLeaveRoomAsw implements IoLeaveRoomAsw {

    /**
     * Constructs a new oLeaveRoomAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLeaveRoomAsw);

    /** oLeaveRoomAsw code. */
    public code: eError;

    /**
     * Creates a new oLeaveRoomAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLeaveRoomAsw instance
     */
    public static create(properties?: IoLeaveRoomAsw): oLeaveRoomAsw;

    /**
     * Encodes the specified oLeaveRoomAsw message. Does not implicitly {@link oLeaveRoomAsw.verify|verify} messages.
     * @param message oLeaveRoomAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLeaveRoomAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLeaveRoomAsw message, length delimited. Does not implicitly {@link oLeaveRoomAsw.verify|verify} messages.
     * @param message oLeaveRoomAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLeaveRoomAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLeaveRoomAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLeaveRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLeaveRoomAsw;

    /**
     * Decodes a oLeaveRoomAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLeaveRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLeaveRoomAsw;

    /**
     * Verifies a oLeaveRoomAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLeaveRoomAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLeaveRoomAsw
     */
    public static fromObject(object: { [k: string]: any }): oLeaveRoomAsw;

    /**
     * Creates a plain object from a oLeaveRoomAsw message. Also converts values to other types if specified.
     * @param message oLeaveRoomAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLeaveRoomAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLeaveRoomAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLeaveRoomAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLeaveRoomPush. */
export class oLeaveRoomPush implements IoLeaveRoomPush {

    /**
     * Constructs a new oLeaveRoomPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLeaveRoomPush);

    /** oLeaveRoomPush leaveUserId. */
    public leaveUserId: (number|Long);

    /**
     * Creates a new oLeaveRoomPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLeaveRoomPush instance
     */
    public static create(properties?: IoLeaveRoomPush): oLeaveRoomPush;

    /**
     * Encodes the specified oLeaveRoomPush message. Does not implicitly {@link oLeaveRoomPush.verify|verify} messages.
     * @param message oLeaveRoomPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLeaveRoomPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLeaveRoomPush message, length delimited. Does not implicitly {@link oLeaveRoomPush.verify|verify} messages.
     * @param message oLeaveRoomPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLeaveRoomPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLeaveRoomPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLeaveRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLeaveRoomPush;

    /**
     * Decodes a oLeaveRoomPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLeaveRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLeaveRoomPush;

    /**
     * Verifies a oLeaveRoomPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLeaveRoomPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLeaveRoomPush
     */
    public static fromObject(object: { [k: string]: any }): oLeaveRoomPush;

    /**
     * Creates a plain object from a oLeaveRoomPush message. Also converts values to other types if specified.
     * @param message oLeaveRoomPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLeaveRoomPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLeaveRoomPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLeaveRoomPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oDissolveRoomReq. */
export class oDissolveRoomReq implements IoDissolveRoomReq {

    /**
     * Constructs a new oDissolveRoomReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoDissolveRoomReq);

    /** oDissolveRoomReq roomId. */
    public roomId: (number|Long);

    /**
     * Creates a new oDissolveRoomReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oDissolveRoomReq instance
     */
    public static create(properties?: IoDissolveRoomReq): oDissolveRoomReq;

    /**
     * Encodes the specified oDissolveRoomReq message. Does not implicitly {@link oDissolveRoomReq.verify|verify} messages.
     * @param message oDissolveRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoDissolveRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oDissolveRoomReq message, length delimited. Does not implicitly {@link oDissolveRoomReq.verify|verify} messages.
     * @param message oDissolveRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoDissolveRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oDissolveRoomReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oDissolveRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oDissolveRoomReq;

    /**
     * Decodes a oDissolveRoomReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oDissolveRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oDissolveRoomReq;

    /**
     * Verifies a oDissolveRoomReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oDissolveRoomReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oDissolveRoomReq
     */
    public static fromObject(object: { [k: string]: any }): oDissolveRoomReq;

    /**
     * Creates a plain object from a oDissolveRoomReq message. Also converts values to other types if specified.
     * @param message oDissolveRoomReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oDissolveRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oDissolveRoomReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oDissolveRoomReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oDissolveRoomAsw. */
export class oDissolveRoomAsw implements IoDissolveRoomAsw {

    /**
     * Constructs a new oDissolveRoomAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoDissolveRoomAsw);

    /** oDissolveRoomAsw code. */
    public code: eError;

    /** oDissolveRoomAsw roomId. */
    public roomId: (number|Long);

    /**
     * Creates a new oDissolveRoomAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oDissolveRoomAsw instance
     */
    public static create(properties?: IoDissolveRoomAsw): oDissolveRoomAsw;

    /**
     * Encodes the specified oDissolveRoomAsw message. Does not implicitly {@link oDissolveRoomAsw.verify|verify} messages.
     * @param message oDissolveRoomAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoDissolveRoomAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oDissolveRoomAsw message, length delimited. Does not implicitly {@link oDissolveRoomAsw.verify|verify} messages.
     * @param message oDissolveRoomAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoDissolveRoomAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oDissolveRoomAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oDissolveRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oDissolveRoomAsw;

    /**
     * Decodes a oDissolveRoomAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oDissolveRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oDissolveRoomAsw;

    /**
     * Verifies a oDissolveRoomAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oDissolveRoomAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oDissolveRoomAsw
     */
    public static fromObject(object: { [k: string]: any }): oDissolveRoomAsw;

    /**
     * Creates a plain object from a oDissolveRoomAsw message. Also converts values to other types if specified.
     * @param message oDissolveRoomAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oDissolveRoomAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oDissolveRoomAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oDissolveRoomAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oDissolveRoomPush. */
export class oDissolveRoomPush implements IoDissolveRoomPush {

    /**
     * Constructs a new oDissolveRoomPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoDissolveRoomPush);

    /** oDissolveRoomPush roomId. */
    public roomId: (number|Long);

    /**
     * Creates a new oDissolveRoomPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oDissolveRoomPush instance
     */
    public static create(properties?: IoDissolveRoomPush): oDissolveRoomPush;

    /**
     * Encodes the specified oDissolveRoomPush message. Does not implicitly {@link oDissolveRoomPush.verify|verify} messages.
     * @param message oDissolveRoomPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoDissolveRoomPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oDissolveRoomPush message, length delimited. Does not implicitly {@link oDissolveRoomPush.verify|verify} messages.
     * @param message oDissolveRoomPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoDissolveRoomPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oDissolveRoomPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oDissolveRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oDissolveRoomPush;

    /**
     * Decodes a oDissolveRoomPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oDissolveRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oDissolveRoomPush;

    /**
     * Verifies a oDissolveRoomPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oDissolveRoomPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oDissolveRoomPush
     */
    public static fromObject(object: { [k: string]: any }): oDissolveRoomPush;

    /**
     * Creates a plain object from a oDissolveRoomPush message. Also converts values to other types if specified.
     * @param message oDissolveRoomPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oDissolveRoomPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oDissolveRoomPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oDissolveRoomPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oQuitRoomReq. */
export class oQuitRoomReq implements IoQuitRoomReq {

    /**
     * Constructs a new oQuitRoomReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoQuitRoomReq);

    /** oQuitRoomReq roomId. */
    public roomId: (number|Long);

    /**
     * Creates a new oQuitRoomReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oQuitRoomReq instance
     */
    public static create(properties?: IoQuitRoomReq): oQuitRoomReq;

    /**
     * Encodes the specified oQuitRoomReq message. Does not implicitly {@link oQuitRoomReq.verify|verify} messages.
     * @param message oQuitRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoQuitRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oQuitRoomReq message, length delimited. Does not implicitly {@link oQuitRoomReq.verify|verify} messages.
     * @param message oQuitRoomReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoQuitRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oQuitRoomReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oQuitRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oQuitRoomReq;

    /**
     * Decodes a oQuitRoomReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oQuitRoomReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oQuitRoomReq;

    /**
     * Verifies a oQuitRoomReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oQuitRoomReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oQuitRoomReq
     */
    public static fromObject(object: { [k: string]: any }): oQuitRoomReq;

    /**
     * Creates a plain object from a oQuitRoomReq message. Also converts values to other types if specified.
     * @param message oQuitRoomReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oQuitRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oQuitRoomReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oQuitRoomReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oQuitRoomAsw. */
export class oQuitRoomAsw implements IoQuitRoomAsw {

    /**
     * Constructs a new oQuitRoomAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoQuitRoomAsw);

    /** oQuitRoomAsw code. */
    public code: eError;

    /** oQuitRoomAsw roomId. */
    public roomId: (number|Long);

    /**
     * Creates a new oQuitRoomAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oQuitRoomAsw instance
     */
    public static create(properties?: IoQuitRoomAsw): oQuitRoomAsw;

    /**
     * Encodes the specified oQuitRoomAsw message. Does not implicitly {@link oQuitRoomAsw.verify|verify} messages.
     * @param message oQuitRoomAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoQuitRoomAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oQuitRoomAsw message, length delimited. Does not implicitly {@link oQuitRoomAsw.verify|verify} messages.
     * @param message oQuitRoomAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoQuitRoomAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oQuitRoomAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oQuitRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oQuitRoomAsw;

    /**
     * Decodes a oQuitRoomAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oQuitRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oQuitRoomAsw;

    /**
     * Verifies a oQuitRoomAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oQuitRoomAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oQuitRoomAsw
     */
    public static fromObject(object: { [k: string]: any }): oQuitRoomAsw;

    /**
     * Creates a plain object from a oQuitRoomAsw message. Also converts values to other types if specified.
     * @param message oQuitRoomAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oQuitRoomAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oQuitRoomAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oQuitRoomAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oQuitRoomPush. */
export class oQuitRoomPush implements IoQuitRoomPush {

    /**
     * Constructs a new oQuitRoomPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoQuitRoomPush);

    /** oQuitRoomPush userId. */
    public userId: (number|Long);

    /** oQuitRoomPush roomId. */
    public roomId: (number|Long);

    /**
     * Creates a new oQuitRoomPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oQuitRoomPush instance
     */
    public static create(properties?: IoQuitRoomPush): oQuitRoomPush;

    /**
     * Encodes the specified oQuitRoomPush message. Does not implicitly {@link oQuitRoomPush.verify|verify} messages.
     * @param message oQuitRoomPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoQuitRoomPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oQuitRoomPush message, length delimited. Does not implicitly {@link oQuitRoomPush.verify|verify} messages.
     * @param message oQuitRoomPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoQuitRoomPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oQuitRoomPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oQuitRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oQuitRoomPush;

    /**
     * Decodes a oQuitRoomPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oQuitRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oQuitRoomPush;

    /**
     * Verifies a oQuitRoomPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oQuitRoomPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oQuitRoomPush
     */
    public static fromObject(object: { [k: string]: any }): oQuitRoomPush;

    /**
     * Creates a plain object from a oQuitRoomPush message. Also converts values to other types if specified.
     * @param message oQuitRoomPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oQuitRoomPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oQuitRoomPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oQuitRoomPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oKickUserOutRoom. */
export class oKickUserOutRoom implements IoKickUserOutRoom {

    /**
     * Constructs a new oKickUserOutRoom.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoKickUserOutRoom);

    /** oKickUserOutRoom roomId. */
    public roomId: (number|Long);

    /** oKickUserOutRoom kickUserId. */
    public kickUserId: (number|Long);

    /**
     * Creates a new oKickUserOutRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oKickUserOutRoom instance
     */
    public static create(properties?: IoKickUserOutRoom): oKickUserOutRoom;

    /**
     * Encodes the specified oKickUserOutRoom message. Does not implicitly {@link oKickUserOutRoom.verify|verify} messages.
     * @param message oKickUserOutRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoKickUserOutRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oKickUserOutRoom message, length delimited. Does not implicitly {@link oKickUserOutRoom.verify|verify} messages.
     * @param message oKickUserOutRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoKickUserOutRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oKickUserOutRoom message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oKickUserOutRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oKickUserOutRoom;

    /**
     * Decodes a oKickUserOutRoom message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oKickUserOutRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oKickUserOutRoom;

    /**
     * Verifies a oKickUserOutRoom message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oKickUserOutRoom message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oKickUserOutRoom
     */
    public static fromObject(object: { [k: string]: any }): oKickUserOutRoom;

    /**
     * Creates a plain object from a oKickUserOutRoom message. Also converts values to other types if specified.
     * @param message oKickUserOutRoom
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oKickUserOutRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oKickUserOutRoom to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oKickUserOutRoom
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oKickUserOutRoomAsw. */
export class oKickUserOutRoomAsw implements IoKickUserOutRoomAsw {

    /**
     * Constructs a new oKickUserOutRoomAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoKickUserOutRoomAsw);

    /** oKickUserOutRoomAsw code. */
    public code: eError;

    /** oKickUserOutRoomAsw kickUserId. */
    public kickUserId: (number|Long);

    /**
     * Creates a new oKickUserOutRoomAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oKickUserOutRoomAsw instance
     */
    public static create(properties?: IoKickUserOutRoomAsw): oKickUserOutRoomAsw;

    /**
     * Encodes the specified oKickUserOutRoomAsw message. Does not implicitly {@link oKickUserOutRoomAsw.verify|verify} messages.
     * @param message oKickUserOutRoomAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoKickUserOutRoomAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oKickUserOutRoomAsw message, length delimited. Does not implicitly {@link oKickUserOutRoomAsw.verify|verify} messages.
     * @param message oKickUserOutRoomAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoKickUserOutRoomAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oKickUserOutRoomAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oKickUserOutRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oKickUserOutRoomAsw;

    /**
     * Decodes a oKickUserOutRoomAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oKickUserOutRoomAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oKickUserOutRoomAsw;

    /**
     * Verifies a oKickUserOutRoomAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oKickUserOutRoomAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oKickUserOutRoomAsw
     */
    public static fromObject(object: { [k: string]: any }): oKickUserOutRoomAsw;

    /**
     * Creates a plain object from a oKickUserOutRoomAsw message. Also converts values to other types if specified.
     * @param message oKickUserOutRoomAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oKickUserOutRoomAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oKickUserOutRoomAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oKickUserOutRoomAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oKickUserOutRoomPush. */
export class oKickUserOutRoomPush implements IoKickUserOutRoomPush {

    /**
     * Constructs a new oKickUserOutRoomPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoKickUserOutRoomPush);

    /** oKickUserOutRoomPush roomId. */
    public roomId: (number|Long);

    /** oKickUserOutRoomPush kickUserId. */
    public kickUserId: (number|Long);

    /**
     * Creates a new oKickUserOutRoomPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oKickUserOutRoomPush instance
     */
    public static create(properties?: IoKickUserOutRoomPush): oKickUserOutRoomPush;

    /**
     * Encodes the specified oKickUserOutRoomPush message. Does not implicitly {@link oKickUserOutRoomPush.verify|verify} messages.
     * @param message oKickUserOutRoomPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoKickUserOutRoomPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oKickUserOutRoomPush message, length delimited. Does not implicitly {@link oKickUserOutRoomPush.verify|verify} messages.
     * @param message oKickUserOutRoomPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoKickUserOutRoomPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oKickUserOutRoomPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oKickUserOutRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oKickUserOutRoomPush;

    /**
     * Decodes a oKickUserOutRoomPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oKickUserOutRoomPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oKickUserOutRoomPush;

    /**
     * Verifies a oKickUserOutRoomPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oKickUserOutRoomPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oKickUserOutRoomPush
     */
    public static fromObject(object: { [k: string]: any }): oKickUserOutRoomPush;

    /**
     * Creates a plain object from a oKickUserOutRoomPush message. Also converts values to other types if specified.
     * @param message oKickUserOutRoomPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oKickUserOutRoomPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oKickUserOutRoomPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oKickUserOutRoomPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oChangeRoomNameReq. */
export class oChangeRoomNameReq implements IoChangeRoomNameReq {

    /**
     * Constructs a new oChangeRoomNameReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoChangeRoomNameReq);

    /** oChangeRoomNameReq roomId. */
    public roomId: (number|Long);

    /** oChangeRoomNameReq name. */
    public name: string;

    /**
     * Creates a new oChangeRoomNameReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oChangeRoomNameReq instance
     */
    public static create(properties?: IoChangeRoomNameReq): oChangeRoomNameReq;

    /**
     * Encodes the specified oChangeRoomNameReq message. Does not implicitly {@link oChangeRoomNameReq.verify|verify} messages.
     * @param message oChangeRoomNameReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoChangeRoomNameReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oChangeRoomNameReq message, length delimited. Does not implicitly {@link oChangeRoomNameReq.verify|verify} messages.
     * @param message oChangeRoomNameReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoChangeRoomNameReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oChangeRoomNameReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oChangeRoomNameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oChangeRoomNameReq;

    /**
     * Decodes a oChangeRoomNameReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oChangeRoomNameReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oChangeRoomNameReq;

    /**
     * Verifies a oChangeRoomNameReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oChangeRoomNameReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oChangeRoomNameReq
     */
    public static fromObject(object: { [k: string]: any }): oChangeRoomNameReq;

    /**
     * Creates a plain object from a oChangeRoomNameReq message. Also converts values to other types if specified.
     * @param message oChangeRoomNameReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oChangeRoomNameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oChangeRoomNameReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oChangeRoomNameReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oChangeRoomNameAsw. */
export class oChangeRoomNameAsw implements IoChangeRoomNameAsw {

    /**
     * Constructs a new oChangeRoomNameAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoChangeRoomNameAsw);

    /** oChangeRoomNameAsw code. */
    public code: eError;

    /**
     * Creates a new oChangeRoomNameAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oChangeRoomNameAsw instance
     */
    public static create(properties?: IoChangeRoomNameAsw): oChangeRoomNameAsw;

    /**
     * Encodes the specified oChangeRoomNameAsw message. Does not implicitly {@link oChangeRoomNameAsw.verify|verify} messages.
     * @param message oChangeRoomNameAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoChangeRoomNameAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oChangeRoomNameAsw message, length delimited. Does not implicitly {@link oChangeRoomNameAsw.verify|verify} messages.
     * @param message oChangeRoomNameAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoChangeRoomNameAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oChangeRoomNameAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oChangeRoomNameAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oChangeRoomNameAsw;

    /**
     * Decodes a oChangeRoomNameAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oChangeRoomNameAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oChangeRoomNameAsw;

    /**
     * Verifies a oChangeRoomNameAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oChangeRoomNameAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oChangeRoomNameAsw
     */
    public static fromObject(object: { [k: string]: any }): oChangeRoomNameAsw;

    /**
     * Creates a plain object from a oChangeRoomNameAsw message. Also converts values to other types if specified.
     * @param message oChangeRoomNameAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oChangeRoomNameAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oChangeRoomNameAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oChangeRoomNameAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oChangeRoomNamePush. */
export class oChangeRoomNamePush implements IoChangeRoomNamePush {

    /**
     * Constructs a new oChangeRoomNamePush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoChangeRoomNamePush);

    /** oChangeRoomNamePush roomId. */
    public roomId: (number|Long);

    /** oChangeRoomNamePush name. */
    public name: string;

    /**
     * Creates a new oChangeRoomNamePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oChangeRoomNamePush instance
     */
    public static create(properties?: IoChangeRoomNamePush): oChangeRoomNamePush;

    /**
     * Encodes the specified oChangeRoomNamePush message. Does not implicitly {@link oChangeRoomNamePush.verify|verify} messages.
     * @param message oChangeRoomNamePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoChangeRoomNamePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oChangeRoomNamePush message, length delimited. Does not implicitly {@link oChangeRoomNamePush.verify|verify} messages.
     * @param message oChangeRoomNamePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoChangeRoomNamePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oChangeRoomNamePush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oChangeRoomNamePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oChangeRoomNamePush;

    /**
     * Decodes a oChangeRoomNamePush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oChangeRoomNamePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oChangeRoomNamePush;

    /**
     * Verifies a oChangeRoomNamePush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oChangeRoomNamePush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oChangeRoomNamePush
     */
    public static fromObject(object: { [k: string]: any }): oChangeRoomNamePush;

    /**
     * Creates a plain object from a oChangeRoomNamePush message. Also converts values to other types if specified.
     * @param message oChangeRoomNamePush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oChangeRoomNamePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oChangeRoomNamePush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oChangeRoomNamePush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** eMuteType enum. */
export enum eMuteType {
    MuteOn = 0,
    MuteOff = 1
}

/** Represents a oMuteUserReq. */
export class oMuteUserReq implements IoMuteUserReq {

    /**
     * Constructs a new oMuteUserReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoMuteUserReq);

    /** oMuteUserReq roomId. */
    public roomId: (number|Long);

    /** oMuteUserReq muteAllUser. */
    public muteAllUser: boolean;

    /** oMuteUserReq muteUserId. */
    public muteUserId: (number|Long);

    /** oMuteUserReq type. */
    public type: eMuteType;

    /**
     * Creates a new oMuteUserReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oMuteUserReq instance
     */
    public static create(properties?: IoMuteUserReq): oMuteUserReq;

    /**
     * Encodes the specified oMuteUserReq message. Does not implicitly {@link oMuteUserReq.verify|verify} messages.
     * @param message oMuteUserReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoMuteUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oMuteUserReq message, length delimited. Does not implicitly {@link oMuteUserReq.verify|verify} messages.
     * @param message oMuteUserReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoMuteUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oMuteUserReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oMuteUserReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oMuteUserReq;

    /**
     * Decodes a oMuteUserReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oMuteUserReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oMuteUserReq;

    /**
     * Verifies a oMuteUserReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oMuteUserReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oMuteUserReq
     */
    public static fromObject(object: { [k: string]: any }): oMuteUserReq;

    /**
     * Creates a plain object from a oMuteUserReq message. Also converts values to other types if specified.
     * @param message oMuteUserReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oMuteUserReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oMuteUserReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oMuteUserReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oMuteUserAsw. */
export class oMuteUserAsw implements IoMuteUserAsw {

    /**
     * Constructs a new oMuteUserAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoMuteUserAsw);

    /** oMuteUserAsw code. */
    public code: eError;

    /** oMuteUserAsw roomId. */
    public roomId: (number|Long);

    /** oMuteUserAsw muteAllUser. */
    public muteAllUser: boolean;

    /** oMuteUserAsw muteUserId. */
    public muteUserId: (number|Long);

    /** oMuteUserAsw type. */
    public type: eMuteType;

    /**
     * Creates a new oMuteUserAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oMuteUserAsw instance
     */
    public static create(properties?: IoMuteUserAsw): oMuteUserAsw;

    /**
     * Encodes the specified oMuteUserAsw message. Does not implicitly {@link oMuteUserAsw.verify|verify} messages.
     * @param message oMuteUserAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoMuteUserAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oMuteUserAsw message, length delimited. Does not implicitly {@link oMuteUserAsw.verify|verify} messages.
     * @param message oMuteUserAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoMuteUserAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oMuteUserAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oMuteUserAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oMuteUserAsw;

    /**
     * Decodes a oMuteUserAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oMuteUserAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oMuteUserAsw;

    /**
     * Verifies a oMuteUserAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oMuteUserAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oMuteUserAsw
     */
    public static fromObject(object: { [k: string]: any }): oMuteUserAsw;

    /**
     * Creates a plain object from a oMuteUserAsw message. Also converts values to other types if specified.
     * @param message oMuteUserAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oMuteUserAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oMuteUserAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oMuteUserAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oMuteUserPush. */
export class oMuteUserPush implements IoMuteUserPush {

    /**
     * Constructs a new oMuteUserPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoMuteUserPush);

    /** oMuteUserPush roomId. */
    public roomId: (number|Long);

    /** oMuteUserPush muteUserId. */
    public muteUserId: (number|Long);

    /** oMuteUserPush muteAllUser. */
    public muteAllUser: boolean;

    /** oMuteUserPush type. */
    public type: eMuteType;

    /**
     * Creates a new oMuteUserPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oMuteUserPush instance
     */
    public static create(properties?: IoMuteUserPush): oMuteUserPush;

    /**
     * Encodes the specified oMuteUserPush message. Does not implicitly {@link oMuteUserPush.verify|verify} messages.
     * @param message oMuteUserPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoMuteUserPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oMuteUserPush message, length delimited. Does not implicitly {@link oMuteUserPush.verify|verify} messages.
     * @param message oMuteUserPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoMuteUserPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oMuteUserPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oMuteUserPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oMuteUserPush;

    /**
     * Decodes a oMuteUserPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oMuteUserPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oMuteUserPush;

    /**
     * Verifies a oMuteUserPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oMuteUserPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oMuteUserPush
     */
    public static fromObject(object: { [k: string]: any }): oMuteUserPush;

    /**
     * Creates a plain object from a oMuteUserPush message. Also converts values to other types if specified.
     * @param message oMuteUserPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oMuteUserPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oMuteUserPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oMuteUserPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oRoomSetMaxStageCountReq. */
export class oRoomSetMaxStageCountReq implements IoRoomSetMaxStageCountReq {

    /**
     * Constructs a new oRoomSetMaxStageCountReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoRoomSetMaxStageCountReq);

    /** oRoomSetMaxStageCountReq roomId. */
    public roomId: (number|Long);

    /** oRoomSetMaxStageCountReq maxStageCount. */
    public maxStageCount: (number|Long);

    /**
     * Creates a new oRoomSetMaxStageCountReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oRoomSetMaxStageCountReq instance
     */
    public static create(properties?: IoRoomSetMaxStageCountReq): oRoomSetMaxStageCountReq;

    /**
     * Encodes the specified oRoomSetMaxStageCountReq message. Does not implicitly {@link oRoomSetMaxStageCountReq.verify|verify} messages.
     * @param message oRoomSetMaxStageCountReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoRoomSetMaxStageCountReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oRoomSetMaxStageCountReq message, length delimited. Does not implicitly {@link oRoomSetMaxStageCountReq.verify|verify} messages.
     * @param message oRoomSetMaxStageCountReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoRoomSetMaxStageCountReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oRoomSetMaxStageCountReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oRoomSetMaxStageCountReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oRoomSetMaxStageCountReq;

    /**
     * Decodes a oRoomSetMaxStageCountReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oRoomSetMaxStageCountReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oRoomSetMaxStageCountReq;

    /**
     * Verifies a oRoomSetMaxStageCountReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oRoomSetMaxStageCountReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oRoomSetMaxStageCountReq
     */
    public static fromObject(object: { [k: string]: any }): oRoomSetMaxStageCountReq;

    /**
     * Creates a plain object from a oRoomSetMaxStageCountReq message. Also converts values to other types if specified.
     * @param message oRoomSetMaxStageCountReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oRoomSetMaxStageCountReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oRoomSetMaxStageCountReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oRoomSetMaxStageCountReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oRoomSetMaxStageCountAsw. */
export class oRoomSetMaxStageCountAsw implements IoRoomSetMaxStageCountAsw {

    /**
     * Constructs a new oRoomSetMaxStageCountAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoRoomSetMaxStageCountAsw);

    /** oRoomSetMaxStageCountAsw code. */
    public code: eError;

    /** oRoomSetMaxStageCountAsw roomId. */
    public roomId: (number|Long);

    /** oRoomSetMaxStageCountAsw maxStageCount. */
    public maxStageCount: (number|Long);

    /**
     * Creates a new oRoomSetMaxStageCountAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oRoomSetMaxStageCountAsw instance
     */
    public static create(properties?: IoRoomSetMaxStageCountAsw): oRoomSetMaxStageCountAsw;

    /**
     * Encodes the specified oRoomSetMaxStageCountAsw message. Does not implicitly {@link oRoomSetMaxStageCountAsw.verify|verify} messages.
     * @param message oRoomSetMaxStageCountAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoRoomSetMaxStageCountAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oRoomSetMaxStageCountAsw message, length delimited. Does not implicitly {@link oRoomSetMaxStageCountAsw.verify|verify} messages.
     * @param message oRoomSetMaxStageCountAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoRoomSetMaxStageCountAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oRoomSetMaxStageCountAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oRoomSetMaxStageCountAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oRoomSetMaxStageCountAsw;

    /**
     * Decodes a oRoomSetMaxStageCountAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oRoomSetMaxStageCountAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oRoomSetMaxStageCountAsw;

    /**
     * Verifies a oRoomSetMaxStageCountAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oRoomSetMaxStageCountAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oRoomSetMaxStageCountAsw
     */
    public static fromObject(object: { [k: string]: any }): oRoomSetMaxStageCountAsw;

    /**
     * Creates a plain object from a oRoomSetMaxStageCountAsw message. Also converts values to other types if specified.
     * @param message oRoomSetMaxStageCountAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oRoomSetMaxStageCountAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oRoomSetMaxStageCountAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oRoomSetMaxStageCountAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oGetImagesInfoReq. */
export class oGetImagesInfoReq implements IoGetImagesInfoReq {

    /**
     * Constructs a new oGetImagesInfoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoGetImagesInfoReq);

    /** oGetImagesInfoReq videoId. */
    public videoId: (number|Long);

    /**
     * Creates a new oGetImagesInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oGetImagesInfoReq instance
     */
    public static create(properties?: IoGetImagesInfoReq): oGetImagesInfoReq;

    /**
     * Encodes the specified oGetImagesInfoReq message. Does not implicitly {@link oGetImagesInfoReq.verify|verify} messages.
     * @param message oGetImagesInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoGetImagesInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oGetImagesInfoReq message, length delimited. Does not implicitly {@link oGetImagesInfoReq.verify|verify} messages.
     * @param message oGetImagesInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoGetImagesInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oGetImagesInfoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oGetImagesInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oGetImagesInfoReq;

    /**
     * Decodes a oGetImagesInfoReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oGetImagesInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oGetImagesInfoReq;

    /**
     * Verifies a oGetImagesInfoReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oGetImagesInfoReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oGetImagesInfoReq
     */
    public static fromObject(object: { [k: string]: any }): oGetImagesInfoReq;

    /**
     * Creates a plain object from a oGetImagesInfoReq message. Also converts values to other types if specified.
     * @param message oGetImagesInfoReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oGetImagesInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oGetImagesInfoReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oGetImagesInfoReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oRoomSetMaxStageCountPush. */
export class oRoomSetMaxStageCountPush implements IoRoomSetMaxStageCountPush {

    /**
     * Constructs a new oRoomSetMaxStageCountPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoRoomSetMaxStageCountPush);

    /** oRoomSetMaxStageCountPush roomId. */
    public roomId: (number|Long);

    /** oRoomSetMaxStageCountPush maxStageCount. */
    public maxStageCount: (number|Long);

    /**
     * Creates a new oRoomSetMaxStageCountPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oRoomSetMaxStageCountPush instance
     */
    public static create(properties?: IoRoomSetMaxStageCountPush): oRoomSetMaxStageCountPush;

    /**
     * Encodes the specified oRoomSetMaxStageCountPush message. Does not implicitly {@link oRoomSetMaxStageCountPush.verify|verify} messages.
     * @param message oRoomSetMaxStageCountPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoRoomSetMaxStageCountPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oRoomSetMaxStageCountPush message, length delimited. Does not implicitly {@link oRoomSetMaxStageCountPush.verify|verify} messages.
     * @param message oRoomSetMaxStageCountPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoRoomSetMaxStageCountPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oRoomSetMaxStageCountPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oRoomSetMaxStageCountPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oRoomSetMaxStageCountPush;

    /**
     * Decodes a oRoomSetMaxStageCountPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oRoomSetMaxStageCountPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oRoomSetMaxStageCountPush;

    /**
     * Verifies a oRoomSetMaxStageCountPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oRoomSetMaxStageCountPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oRoomSetMaxStageCountPush
     */
    public static fromObject(object: { [k: string]: any }): oRoomSetMaxStageCountPush;

    /**
     * Creates a plain object from a oRoomSetMaxStageCountPush message. Also converts values to other types if specified.
     * @param message oRoomSetMaxStageCountPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oRoomSetMaxStageCountPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oRoomSetMaxStageCountPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oRoomSetMaxStageCountPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oEnterStageReq. */
export class oEnterStageReq implements IoEnterStageReq {

    /**
     * Constructs a new oEnterStageReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoEnterStageReq);

    /** oEnterStageReq context. */
    public context: string;

    /**
     * Creates a new oEnterStageReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oEnterStageReq instance
     */
    public static create(properties?: IoEnterStageReq): oEnterStageReq;

    /**
     * Encodes the specified oEnterStageReq message. Does not implicitly {@link oEnterStageReq.verify|verify} messages.
     * @param message oEnterStageReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoEnterStageReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oEnterStageReq message, length delimited. Does not implicitly {@link oEnterStageReq.verify|verify} messages.
     * @param message oEnterStageReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoEnterStageReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oEnterStageReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oEnterStageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oEnterStageReq;

    /**
     * Decodes a oEnterStageReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oEnterStageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oEnterStageReq;

    /**
     * Verifies a oEnterStageReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oEnterStageReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oEnterStageReq
     */
    public static fromObject(object: { [k: string]: any }): oEnterStageReq;

    /**
     * Creates a plain object from a oEnterStageReq message. Also converts values to other types if specified.
     * @param message oEnterStageReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oEnterStageReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oEnterStageReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oEnterStageReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oEnterStageAsw. */
export class oEnterStageAsw implements IoEnterStageAsw {

    /**
     * Constructs a new oEnterStageAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoEnterStageAsw);

    /** oEnterStageAsw code. */
    public code: eError;

    /** oEnterStageAsw roomId. */
    public roomId: (number|Long);

    /** oEnterStageAsw stageId. */
    public stageId: (number|Long);

    /**
     * Creates a new oEnterStageAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oEnterStageAsw instance
     */
    public static create(properties?: IoEnterStageAsw): oEnterStageAsw;

    /**
     * Encodes the specified oEnterStageAsw message. Does not implicitly {@link oEnterStageAsw.verify|verify} messages.
     * @param message oEnterStageAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoEnterStageAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oEnterStageAsw message, length delimited. Does not implicitly {@link oEnterStageAsw.verify|verify} messages.
     * @param message oEnterStageAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoEnterStageAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oEnterStageAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oEnterStageAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oEnterStageAsw;

    /**
     * Decodes a oEnterStageAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oEnterStageAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oEnterStageAsw;

    /**
     * Verifies a oEnterStageAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oEnterStageAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oEnterStageAsw
     */
    public static fromObject(object: { [k: string]: any }): oEnterStageAsw;

    /**
     * Creates a plain object from a oEnterStageAsw message. Also converts values to other types if specified.
     * @param message oEnterStageAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oEnterStageAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oEnterStageAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oEnterStageAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oEnterStagePush. */
export class oEnterStagePush implements IoEnterStagePush {

    /**
     * Constructs a new oEnterStagePush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoEnterStagePush);

    /** oEnterStagePush userId. */
    public userId: (number|Long);

    /** oEnterStagePush stageId. */
    public stageId: (number|Long);

    /**
     * Creates a new oEnterStagePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oEnterStagePush instance
     */
    public static create(properties?: IoEnterStagePush): oEnterStagePush;

    /**
     * Encodes the specified oEnterStagePush message. Does not implicitly {@link oEnterStagePush.verify|verify} messages.
     * @param message oEnterStagePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoEnterStagePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oEnterStagePush message, length delimited. Does not implicitly {@link oEnterStagePush.verify|verify} messages.
     * @param message oEnterStagePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoEnterStagePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oEnterStagePush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oEnterStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oEnterStagePush;

    /**
     * Decodes a oEnterStagePush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oEnterStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oEnterStagePush;

    /**
     * Verifies a oEnterStagePush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oEnterStagePush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oEnterStagePush
     */
    public static fromObject(object: { [k: string]: any }): oEnterStagePush;

    /**
     * Creates a plain object from a oEnterStagePush message. Also converts values to other types if specified.
     * @param message oEnterStagePush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oEnterStagePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oEnterStagePush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oEnterStagePush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLeaveStageReq. */
export class oLeaveStageReq implements IoLeaveStageReq {

    /**
     * Constructs a new oLeaveStageReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLeaveStageReq);

    /**
     * Creates a new oLeaveStageReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLeaveStageReq instance
     */
    public static create(properties?: IoLeaveStageReq): oLeaveStageReq;

    /**
     * Encodes the specified oLeaveStageReq message. Does not implicitly {@link oLeaveStageReq.verify|verify} messages.
     * @param message oLeaveStageReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLeaveStageReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLeaveStageReq message, length delimited. Does not implicitly {@link oLeaveStageReq.verify|verify} messages.
     * @param message oLeaveStageReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLeaveStageReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLeaveStageReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLeaveStageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLeaveStageReq;

    /**
     * Decodes a oLeaveStageReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLeaveStageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLeaveStageReq;

    /**
     * Verifies a oLeaveStageReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLeaveStageReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLeaveStageReq
     */
    public static fromObject(object: { [k: string]: any }): oLeaveStageReq;

    /**
     * Creates a plain object from a oLeaveStageReq message. Also converts values to other types if specified.
     * @param message oLeaveStageReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLeaveStageReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLeaveStageReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLeaveStageReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLeaveStageAsw. */
export class oLeaveStageAsw implements IoLeaveStageAsw {

    /**
     * Constructs a new oLeaveStageAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLeaveStageAsw);

    /** oLeaveStageAsw code. */
    public code: eError;

    /** oLeaveStageAsw stageId. */
    public stageId: (number|Long);

    /**
     * Creates a new oLeaveStageAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLeaveStageAsw instance
     */
    public static create(properties?: IoLeaveStageAsw): oLeaveStageAsw;

    /**
     * Encodes the specified oLeaveStageAsw message. Does not implicitly {@link oLeaveStageAsw.verify|verify} messages.
     * @param message oLeaveStageAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLeaveStageAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLeaveStageAsw message, length delimited. Does not implicitly {@link oLeaveStageAsw.verify|verify} messages.
     * @param message oLeaveStageAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLeaveStageAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLeaveStageAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLeaveStageAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLeaveStageAsw;

    /**
     * Decodes a oLeaveStageAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLeaveStageAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLeaveStageAsw;

    /**
     * Verifies a oLeaveStageAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLeaveStageAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLeaveStageAsw
     */
    public static fromObject(object: { [k: string]: any }): oLeaveStageAsw;

    /**
     * Creates a plain object from a oLeaveStageAsw message. Also converts values to other types if specified.
     * @param message oLeaveStageAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLeaveStageAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLeaveStageAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLeaveStageAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLeaveStagePush. */
export class oLeaveStagePush implements IoLeaveStagePush {

    /**
     * Constructs a new oLeaveStagePush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLeaveStagePush);

    /** oLeaveStagePush userId. */
    public userId: (number|Long);

    /** oLeaveStagePush stageId. */
    public stageId: (number|Long);

    /**
     * Creates a new oLeaveStagePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLeaveStagePush instance
     */
    public static create(properties?: IoLeaveStagePush): oLeaveStagePush;

    /**
     * Encodes the specified oLeaveStagePush message. Does not implicitly {@link oLeaveStagePush.verify|verify} messages.
     * @param message oLeaveStagePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLeaveStagePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLeaveStagePush message, length delimited. Does not implicitly {@link oLeaveStagePush.verify|verify} messages.
     * @param message oLeaveStagePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLeaveStagePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLeaveStagePush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLeaveStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLeaveStagePush;

    /**
     * Decodes a oLeaveStagePush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLeaveStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLeaveStagePush;

    /**
     * Verifies a oLeaveStagePush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLeaveStagePush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLeaveStagePush
     */
    public static fromObject(object: { [k: string]: any }): oLeaveStagePush;

    /**
     * Creates a plain object from a oLeaveStagePush message. Also converts values to other types if specified.
     * @param message oLeaveStagePush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLeaveStagePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLeaveStagePush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLeaveStagePush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** eStageQueueType enum. */
export enum eStageQueueType {
    RoomQueue = 0,
    HardWare = 1
}

/** Represents a oStageQueueInfoPush. */
export class oStageQueueInfoPush implements IoStageQueueInfoPush {

    /**
     * Constructs a new oStageQueueInfoPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoStageQueueInfoPush);

    /** oStageQueueInfoPush type. */
    public type: eStageQueueType;

    /** oStageQueueInfoPush queueCount. */
    public queueCount: number;

    /** oStageQueueInfoPush queueUserIds. */
    public queueUserIds: IoStageInfo[];

    /** oStageQueueInfoPush stageCount. */
    public stageCount: number;

    /** oStageQueueInfoPush stageUserIds. */
    public stageUserIds: IoStageInfo[];

    /** oStageQueueInfoPush stageQueueUserIds. */
    public stageQueueUserIds: (number|Long)[];

    /**
     * Creates a new oStageQueueInfoPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oStageQueueInfoPush instance
     */
    public static create(properties?: IoStageQueueInfoPush): oStageQueueInfoPush;

    /**
     * Encodes the specified oStageQueueInfoPush message. Does not implicitly {@link oStageQueueInfoPush.verify|verify} messages.
     * @param message oStageQueueInfoPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoStageQueueInfoPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oStageQueueInfoPush message, length delimited. Does not implicitly {@link oStageQueueInfoPush.verify|verify} messages.
     * @param message oStageQueueInfoPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoStageQueueInfoPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oStageQueueInfoPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oStageQueueInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oStageQueueInfoPush;

    /**
     * Decodes a oStageQueueInfoPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oStageQueueInfoPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oStageQueueInfoPush;

    /**
     * Verifies a oStageQueueInfoPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oStageQueueInfoPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oStageQueueInfoPush
     */
    public static fromObject(object: { [k: string]: any }): oStageQueueInfoPush;

    /**
     * Creates a plain object from a oStageQueueInfoPush message. Also converts values to other types if specified.
     * @param message oStageQueueInfoPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oStageQueueInfoPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oStageQueueInfoPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oStageQueueInfoPush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLeaveQueueReq. */
export class oLeaveQueueReq implements IoLeaveQueueReq {

    /**
     * Constructs a new oLeaveQueueReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLeaveQueueReq);

    /**
     * Creates a new oLeaveQueueReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLeaveQueueReq instance
     */
    public static create(properties?: IoLeaveQueueReq): oLeaveQueueReq;

    /**
     * Encodes the specified oLeaveQueueReq message. Does not implicitly {@link oLeaveQueueReq.verify|verify} messages.
     * @param message oLeaveQueueReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLeaveQueueReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLeaveQueueReq message, length delimited. Does not implicitly {@link oLeaveQueueReq.verify|verify} messages.
     * @param message oLeaveQueueReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLeaveQueueReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLeaveQueueReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLeaveQueueReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLeaveQueueReq;

    /**
     * Decodes a oLeaveQueueReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLeaveQueueReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLeaveQueueReq;

    /**
     * Verifies a oLeaveQueueReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLeaveQueueReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLeaveQueueReq
     */
    public static fromObject(object: { [k: string]: any }): oLeaveQueueReq;

    /**
     * Creates a plain object from a oLeaveQueueReq message. Also converts values to other types if specified.
     * @param message oLeaveQueueReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLeaveQueueReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLeaveQueueReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLeaveQueueReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLeaveQueueAsw. */
export class oLeaveQueueAsw implements IoLeaveQueueAsw {

    /**
     * Constructs a new oLeaveQueueAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLeaveQueueAsw);

    /** oLeaveQueueAsw code. */
    public code: eError;

    /**
     * Creates a new oLeaveQueueAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLeaveQueueAsw instance
     */
    public static create(properties?: IoLeaveQueueAsw): oLeaveQueueAsw;

    /**
     * Encodes the specified oLeaveQueueAsw message. Does not implicitly {@link oLeaveQueueAsw.verify|verify} messages.
     * @param message oLeaveQueueAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLeaveQueueAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLeaveQueueAsw message, length delimited. Does not implicitly {@link oLeaveQueueAsw.verify|verify} messages.
     * @param message oLeaveQueueAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLeaveQueueAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLeaveQueueAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLeaveQueueAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLeaveQueueAsw;

    /**
     * Decodes a oLeaveQueueAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLeaveQueueAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLeaveQueueAsw;

    /**
     * Verifies a oLeaveQueueAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLeaveQueueAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLeaveQueueAsw
     */
    public static fromObject(object: { [k: string]: any }): oLeaveQueueAsw;

    /**
     * Creates a plain object from a oLeaveQueueAsw message. Also converts values to other types if specified.
     * @param message oLeaveQueueAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLeaveQueueAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLeaveQueueAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLeaveQueueAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oKickOutStagePush. */
export class oKickOutStagePush implements IoKickOutStagePush {

    /**
     * Constructs a new oKickOutStagePush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoKickOutStagePush);

    /** oKickOutStagePush userId. */
    public userId: (number|Long);

    /**
     * Creates a new oKickOutStagePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oKickOutStagePush instance
     */
    public static create(properties?: IoKickOutStagePush): oKickOutStagePush;

    /**
     * Encodes the specified oKickOutStagePush message. Does not implicitly {@link oKickOutStagePush.verify|verify} messages.
     * @param message oKickOutStagePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoKickOutStagePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oKickOutStagePush message, length delimited. Does not implicitly {@link oKickOutStagePush.verify|verify} messages.
     * @param message oKickOutStagePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoKickOutStagePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oKickOutStagePush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oKickOutStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oKickOutStagePush;

    /**
     * Decodes a oKickOutStagePush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oKickOutStagePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oKickOutStagePush;

    /**
     * Verifies a oKickOutStagePush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oKickOutStagePush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oKickOutStagePush
     */
    public static fromObject(object: { [k: string]: any }): oKickOutStagePush;

    /**
     * Creates a plain object from a oKickOutStagePush message. Also converts values to other types if specified.
     * @param message oKickOutStagePush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oKickOutStagePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oKickOutStagePush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oKickOutStagePush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLeaveUeReq. */
export class oLeaveUeReq implements IoLeaveUeReq {

    /**
     * Constructs a new oLeaveUeReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLeaveUeReq);

    /**
     * Creates a new oLeaveUeReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLeaveUeReq instance
     */
    public static create(properties?: IoLeaveUeReq): oLeaveUeReq;

    /**
     * Encodes the specified oLeaveUeReq message. Does not implicitly {@link oLeaveUeReq.verify|verify} messages.
     * @param message oLeaveUeReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLeaveUeReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLeaveUeReq message, length delimited. Does not implicitly {@link oLeaveUeReq.verify|verify} messages.
     * @param message oLeaveUeReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLeaveUeReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLeaveUeReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLeaveUeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLeaveUeReq;

    /**
     * Decodes a oLeaveUeReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLeaveUeReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLeaveUeReq;

    /**
     * Verifies a oLeaveUeReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLeaveUeReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLeaveUeReq
     */
    public static fromObject(object: { [k: string]: any }): oLeaveUeReq;

    /**
     * Creates a plain object from a oLeaveUeReq message. Also converts values to other types if specified.
     * @param message oLeaveUeReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLeaveUeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLeaveUeReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLeaveUeReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLeaveUeAsw. */
export class oLeaveUeAsw implements IoLeaveUeAsw {

    /**
     * Constructs a new oLeaveUeAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLeaveUeAsw);

    /** oLeaveUeAsw code. */
    public code: eError;

    /** oLeaveUeAsw index. */
    public index: number;

    /** oLeaveUeAsw stageId. */
    public stageId: number;

    /**
     * Creates a new oLeaveUeAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLeaveUeAsw instance
     */
    public static create(properties?: IoLeaveUeAsw): oLeaveUeAsw;

    /**
     * Encodes the specified oLeaveUeAsw message. Does not implicitly {@link oLeaveUeAsw.verify|verify} messages.
     * @param message oLeaveUeAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLeaveUeAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLeaveUeAsw message, length delimited. Does not implicitly {@link oLeaveUeAsw.verify|verify} messages.
     * @param message oLeaveUeAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLeaveUeAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLeaveUeAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLeaveUeAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLeaveUeAsw;

    /**
     * Decodes a oLeaveUeAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLeaveUeAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLeaveUeAsw;

    /**
     * Verifies a oLeaveUeAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLeaveUeAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLeaveUeAsw
     */
    public static fromObject(object: { [k: string]: any }): oLeaveUeAsw;

    /**
     * Creates a plain object from a oLeaveUeAsw message. Also converts values to other types if specified.
     * @param message oLeaveUeAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLeaveUeAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLeaveUeAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLeaveUeAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oLeaveUePush. */
export class oLeaveUePush implements IoLeaveUePush {

    /**
     * Constructs a new oLeaveUePush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoLeaveUePush);

    /** oLeaveUePush userId. */
    public userId: (number|Long);

    /** oLeaveUePush index. */
    public index: number;

    /** oLeaveUePush stageId. */
    public stageId: number;

    /**
     * Creates a new oLeaveUePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oLeaveUePush instance
     */
    public static create(properties?: IoLeaveUePush): oLeaveUePush;

    /**
     * Encodes the specified oLeaveUePush message. Does not implicitly {@link oLeaveUePush.verify|verify} messages.
     * @param message oLeaveUePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoLeaveUePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oLeaveUePush message, length delimited. Does not implicitly {@link oLeaveUePush.verify|verify} messages.
     * @param message oLeaveUePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoLeaveUePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oLeaveUePush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oLeaveUePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oLeaveUePush;

    /**
     * Decodes a oLeaveUePush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oLeaveUePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oLeaveUePush;

    /**
     * Verifies a oLeaveUePush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oLeaveUePush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oLeaveUePush
     */
    public static fromObject(object: { [k: string]: any }): oLeaveUePush;

    /**
     * Creates a plain object from a oLeaveUePush message. Also converts values to other types if specified.
     * @param message oLeaveUePush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oLeaveUePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oLeaveUePush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oLeaveUePush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oReEnterStageReq. */
export class oReEnterStageReq implements IoReEnterStageReq {

    /**
     * Constructs a new oReEnterStageReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoReEnterStageReq);

    /** oReEnterStageReq context. */
    public context: string;

    /**
     * Creates a new oReEnterStageReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oReEnterStageReq instance
     */
    public static create(properties?: IoReEnterStageReq): oReEnterStageReq;

    /**
     * Encodes the specified oReEnterStageReq message. Does not implicitly {@link oReEnterStageReq.verify|verify} messages.
     * @param message oReEnterStageReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoReEnterStageReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oReEnterStageReq message, length delimited. Does not implicitly {@link oReEnterStageReq.verify|verify} messages.
     * @param message oReEnterStageReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoReEnterStageReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oReEnterStageReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oReEnterStageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oReEnterStageReq;

    /**
     * Decodes a oReEnterStageReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oReEnterStageReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oReEnterStageReq;

    /**
     * Verifies a oReEnterStageReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oReEnterStageReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oReEnterStageReq
     */
    public static fromObject(object: { [k: string]: any }): oReEnterStageReq;

    /**
     * Creates a plain object from a oReEnterStageReq message. Also converts values to other types if specified.
     * @param message oReEnterStageReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oReEnterStageReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oReEnterStageReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oReEnterStageReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oUpdateEnterStageContextReq. */
export class oUpdateEnterStageContextReq implements IoUpdateEnterStageContextReq {

    /**
     * Constructs a new oUpdateEnterStageContextReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoUpdateEnterStageContextReq);

    /** oUpdateEnterStageContextReq context. */
    public context: string;

    /**
     * Creates a new oUpdateEnterStageContextReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oUpdateEnterStageContextReq instance
     */
    public static create(properties?: IoUpdateEnterStageContextReq): oUpdateEnterStageContextReq;

    /**
     * Encodes the specified oUpdateEnterStageContextReq message. Does not implicitly {@link oUpdateEnterStageContextReq.verify|verify} messages.
     * @param message oUpdateEnterStageContextReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoUpdateEnterStageContextReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oUpdateEnterStageContextReq message, length delimited. Does not implicitly {@link oUpdateEnterStageContextReq.verify|verify} messages.
     * @param message oUpdateEnterStageContextReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoUpdateEnterStageContextReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oUpdateEnterStageContextReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oUpdateEnterStageContextReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oUpdateEnterStageContextReq;

    /**
     * Decodes a oUpdateEnterStageContextReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oUpdateEnterStageContextReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oUpdateEnterStageContextReq;

    /**
     * Verifies a oUpdateEnterStageContextReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oUpdateEnterStageContextReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oUpdateEnterStageContextReq
     */
    public static fromObject(object: { [k: string]: any }): oUpdateEnterStageContextReq;

    /**
     * Creates a plain object from a oUpdateEnterStageContextReq message. Also converts values to other types if specified.
     * @param message oUpdateEnterStageContextReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oUpdateEnterStageContextReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oUpdateEnterStageContextReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oUpdateEnterStageContextReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oUpdateEnterStageContextAsw. */
export class oUpdateEnterStageContextAsw implements IoUpdateEnterStageContextAsw {

    /**
     * Constructs a new oUpdateEnterStageContextAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoUpdateEnterStageContextAsw);

    /** oUpdateEnterStageContextAsw code. */
    public code: eError;

    /**
     * Creates a new oUpdateEnterStageContextAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oUpdateEnterStageContextAsw instance
     */
    public static create(properties?: IoUpdateEnterStageContextAsw): oUpdateEnterStageContextAsw;

    /**
     * Encodes the specified oUpdateEnterStageContextAsw message. Does not implicitly {@link oUpdateEnterStageContextAsw.verify|verify} messages.
     * @param message oUpdateEnterStageContextAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoUpdateEnterStageContextAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oUpdateEnterStageContextAsw message, length delimited. Does not implicitly {@link oUpdateEnterStageContextAsw.verify|verify} messages.
     * @param message oUpdateEnterStageContextAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoUpdateEnterStageContextAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oUpdateEnterStageContextAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oUpdateEnterStageContextAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oUpdateEnterStageContextAsw;

    /**
     * Decodes a oUpdateEnterStageContextAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oUpdateEnterStageContextAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oUpdateEnterStageContextAsw;

    /**
     * Verifies a oUpdateEnterStageContextAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oUpdateEnterStageContextAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oUpdateEnterStageContextAsw
     */
    public static fromObject(object: { [k: string]: any }): oUpdateEnterStageContextAsw;

    /**
     * Creates a plain object from a oUpdateEnterStageContextAsw message. Also converts values to other types if specified.
     * @param message oUpdateEnterStageContextAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oUpdateEnterStageContextAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oUpdateEnterStageContextAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oUpdateEnterStageContextAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oStageStatusChangePush. */
export class oStageStatusChangePush implements IoStageStatusChangePush {

    /**
     * Constructs a new oStageStatusChangePush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoStageStatusChangePush);

    /** oStageStatusChangePush index. */
    public index: number;

    /** oStageStatusChangePush stageId. */
    public stageId: (number|Long);

    /** oStageStatusChangePush userId. */
    public userId: (number|Long);

    /** oStageStatusChangePush stageType. */
    public stageType: eStageType;

    /**
     * Creates a new oStageStatusChangePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oStageStatusChangePush instance
     */
    public static create(properties?: IoStageStatusChangePush): oStageStatusChangePush;

    /**
     * Encodes the specified oStageStatusChangePush message. Does not implicitly {@link oStageStatusChangePush.verify|verify} messages.
     * @param message oStageStatusChangePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoStageStatusChangePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oStageStatusChangePush message, length delimited. Does not implicitly {@link oStageStatusChangePush.verify|verify} messages.
     * @param message oStageStatusChangePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoStageStatusChangePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oStageStatusChangePush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oStageStatusChangePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oStageStatusChangePush;

    /**
     * Decodes a oStageStatusChangePush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oStageStatusChangePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oStageStatusChangePush;

    /**
     * Verifies a oStageStatusChangePush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oStageStatusChangePush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oStageStatusChangePush
     */
    public static fromObject(object: { [k: string]: any }): oStageStatusChangePush;

    /**
     * Creates a plain object from a oStageStatusChangePush message. Also converts values to other types if specified.
     * @param message oStageStatusChangePush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oStageStatusChangePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oStageStatusChangePush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oStageStatusChangePush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oInviteUser. */
export class oInviteUser implements IoInviteUser {

    /**
     * Constructs a new oInviteUser.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoInviteUser);

    /** oInviteUser index. */
    public index: number;

    /** oInviteUser userId. */
    public userId: (number|Long);

    /**
     * Creates a new oInviteUser instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oInviteUser instance
     */
    public static create(properties?: IoInviteUser): oInviteUser;

    /**
     * Encodes the specified oInviteUser message. Does not implicitly {@link oInviteUser.verify|verify} messages.
     * @param message oInviteUser message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoInviteUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oInviteUser message, length delimited. Does not implicitly {@link oInviteUser.verify|verify} messages.
     * @param message oInviteUser message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoInviteUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oInviteUser message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oInviteUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oInviteUser;

    /**
     * Decodes a oInviteUser message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oInviteUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oInviteUser;

    /**
     * Verifies a oInviteUser message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oInviteUser message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oInviteUser
     */
    public static fromObject(object: { [k: string]: any }): oInviteUser;

    /**
     * Creates a plain object from a oInviteUser message. Also converts values to other types if specified.
     * @param message oInviteUser
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oInviteUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oInviteUser to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oInviteUser
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oMultiActionReq. */
export class oMultiActionReq implements IoMultiActionReq {

    /**
     * Constructs a new oMultiActionReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoMultiActionReq);

    /** oMultiActionReq context. */
    public context: string;

    /** oMultiActionReq users. */
    public users: IoInviteUser[];

    /** oMultiActionReq inviteText. */
    public inviteText: string;

    /**
     * Creates a new oMultiActionReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oMultiActionReq instance
     */
    public static create(properties?: IoMultiActionReq): oMultiActionReq;

    /**
     * Encodes the specified oMultiActionReq message. Does not implicitly {@link oMultiActionReq.verify|verify} messages.
     * @param message oMultiActionReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoMultiActionReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oMultiActionReq message, length delimited. Does not implicitly {@link oMultiActionReq.verify|verify} messages.
     * @param message oMultiActionReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoMultiActionReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oMultiActionReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oMultiActionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oMultiActionReq;

    /**
     * Decodes a oMultiActionReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oMultiActionReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oMultiActionReq;

    /**
     * Verifies a oMultiActionReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oMultiActionReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oMultiActionReq
     */
    public static fromObject(object: { [k: string]: any }): oMultiActionReq;

    /**
     * Creates a plain object from a oMultiActionReq message. Also converts values to other types if specified.
     * @param message oMultiActionReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oMultiActionReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oMultiActionReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oMultiActionReq
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oMultiActionAsw. */
export class oMultiActionAsw implements IoMultiActionAsw {

    /**
     * Constructs a new oMultiActionAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoMultiActionAsw);

    /** oMultiActionAsw code. */
    public code: eError;

    /**
     * Creates a new oMultiActionAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oMultiActionAsw instance
     */
    public static create(properties?: IoMultiActionAsw): oMultiActionAsw;

    /**
     * Encodes the specified oMultiActionAsw message. Does not implicitly {@link oMultiActionAsw.verify|verify} messages.
     * @param message oMultiActionAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoMultiActionAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oMultiActionAsw message, length delimited. Does not implicitly {@link oMultiActionAsw.verify|verify} messages.
     * @param message oMultiActionAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoMultiActionAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oMultiActionAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oMultiActionAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oMultiActionAsw;

    /**
     * Decodes a oMultiActionAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oMultiActionAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oMultiActionAsw;

    /**
     * Verifies a oMultiActionAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oMultiActionAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oMultiActionAsw
     */
    public static fromObject(object: { [k: string]: any }): oMultiActionAsw;

    /**
     * Creates a plain object from a oMultiActionAsw message. Also converts values to other types if specified.
     * @param message oMultiActionAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oMultiActionAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oMultiActionAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oMultiActionAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oMultiActionInvitePush. */
export class oMultiActionInvitePush implements IoMultiActionInvitePush {

    /**
     * Constructs a new oMultiActionInvitePush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoMultiActionInvitePush);

    /** oMultiActionInvitePush inviteText. */
    public inviteText: string;

    /** oMultiActionInvitePush userId. */
    public userId: (number|Long);

    /**
     * Creates a new oMultiActionInvitePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oMultiActionInvitePush instance
     */
    public static create(properties?: IoMultiActionInvitePush): oMultiActionInvitePush;

    /**
     * Encodes the specified oMultiActionInvitePush message. Does not implicitly {@link oMultiActionInvitePush.verify|verify} messages.
     * @param message oMultiActionInvitePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoMultiActionInvitePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oMultiActionInvitePush message, length delimited. Does not implicitly {@link oMultiActionInvitePush.verify|verify} messages.
     * @param message oMultiActionInvitePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoMultiActionInvitePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oMultiActionInvitePush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oMultiActionInvitePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oMultiActionInvitePush;

    /**
     * Decodes a oMultiActionInvitePush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oMultiActionInvitePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oMultiActionInvitePush;

    /**
     * Verifies a oMultiActionInvitePush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oMultiActionInvitePush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oMultiActionInvitePush
     */
    public static fromObject(object: { [k: string]: any }): oMultiActionInvitePush;

    /**
     * Creates a plain object from a oMultiActionInvitePush message. Also converts values to other types if specified.
     * @param message oMultiActionInvitePush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oMultiActionInvitePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oMultiActionInvitePush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oMultiActionInvitePush
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oMultiActionReply. */
export class oMultiActionReply implements IoMultiActionReply {

    /**
     * Constructs a new oMultiActionReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoMultiActionReply);

    /** oMultiActionReply agree. */
    public agree: boolean;

    /** oMultiActionReply inviterUserId. */
    public inviterUserId: (number|Long);

    /**
     * Creates a new oMultiActionReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oMultiActionReply instance
     */
    public static create(properties?: IoMultiActionReply): oMultiActionReply;

    /**
     * Encodes the specified oMultiActionReply message. Does not implicitly {@link oMultiActionReply.verify|verify} messages.
     * @param message oMultiActionReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoMultiActionReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oMultiActionReply message, length delimited. Does not implicitly {@link oMultiActionReply.verify|verify} messages.
     * @param message oMultiActionReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoMultiActionReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oMultiActionReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oMultiActionReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oMultiActionReply;

    /**
     * Decodes a oMultiActionReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oMultiActionReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oMultiActionReply;

    /**
     * Verifies a oMultiActionReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oMultiActionReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oMultiActionReply
     */
    public static fromObject(object: { [k: string]: any }): oMultiActionReply;

    /**
     * Creates a plain object from a oMultiActionReply message. Also converts values to other types if specified.
     * @param message oMultiActionReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oMultiActionReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oMultiActionReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oMultiActionReply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oMultiActionReplyAsw. */
export class oMultiActionReplyAsw implements IoMultiActionReplyAsw {

    /**
     * Constructs a new oMultiActionReplyAsw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoMultiActionReplyAsw);

    /** oMultiActionReplyAsw code. */
    public code: eError;

    /**
     * Creates a new oMultiActionReplyAsw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oMultiActionReplyAsw instance
     */
    public static create(properties?: IoMultiActionReplyAsw): oMultiActionReplyAsw;

    /**
     * Encodes the specified oMultiActionReplyAsw message. Does not implicitly {@link oMultiActionReplyAsw.verify|verify} messages.
     * @param message oMultiActionReplyAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoMultiActionReplyAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oMultiActionReplyAsw message, length delimited. Does not implicitly {@link oMultiActionReplyAsw.verify|verify} messages.
     * @param message oMultiActionReplyAsw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoMultiActionReplyAsw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oMultiActionReplyAsw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oMultiActionReplyAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oMultiActionReplyAsw;

    /**
     * Decodes a oMultiActionReplyAsw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oMultiActionReplyAsw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oMultiActionReplyAsw;

    /**
     * Verifies a oMultiActionReplyAsw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oMultiActionReplyAsw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oMultiActionReplyAsw
     */
    public static fromObject(object: { [k: string]: any }): oMultiActionReplyAsw;

    /**
     * Creates a plain object from a oMultiActionReplyAsw message. Also converts values to other types if specified.
     * @param message oMultiActionReplyAsw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oMultiActionReplyAsw, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oMultiActionReplyAsw to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oMultiActionReplyAsw
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a oMultiActionReplyResult. */
export class oMultiActionReplyResult implements IoMultiActionReplyResult {

    /**
     * Constructs a new oMultiActionReplyResult.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoMultiActionReplyResult);

    /** oMultiActionReplyResult agree. */
    public agree: boolean;

    /** oMultiActionReplyResult userId. */
    public userId: (number|Long);

    /**
     * Creates a new oMultiActionReplyResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns oMultiActionReplyResult instance
     */
    public static create(properties?: IoMultiActionReplyResult): oMultiActionReplyResult;

    /**
     * Encodes the specified oMultiActionReplyResult message. Does not implicitly {@link oMultiActionReplyResult.verify|verify} messages.
     * @param message oMultiActionReplyResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoMultiActionReplyResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified oMultiActionReplyResult message, length delimited. Does not implicitly {@link oMultiActionReplyResult.verify|verify} messages.
     * @param message oMultiActionReplyResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoMultiActionReplyResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a oMultiActionReplyResult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns oMultiActionReplyResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oMultiActionReplyResult;

    /**
     * Decodes a oMultiActionReplyResult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns oMultiActionReplyResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oMultiActionReplyResult;

    /**
     * Verifies a oMultiActionReplyResult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a oMultiActionReplyResult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns oMultiActionReplyResult
     */
    public static fromObject(object: { [k: string]: any }): oMultiActionReplyResult;

    /**
     * Creates a plain object from a oMultiActionReplyResult message. Also converts values to other types if specified.
     * @param message oMultiActionReplyResult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: oMultiActionReplyResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this oMultiActionReplyResult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for oMultiActionReplyResult
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
