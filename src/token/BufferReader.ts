export default class BufferReader {
  private buffer: Buffer;
  private position = 0;

  constructor(bytes: Buffer) {
    this.buffer = bytes;
  }

  getUint16(): number {
    const ret = this.buffer.readUInt16LE(this.position);
    this.position += 2;
    return ret;
  }

  getUint32(): number {
    const ret = this.buffer.readUInt32LE(this.position);
    this.position += 4;
    return ret;
  }

  getString(): Buffer {
    const len = this.getUint16();
    const out = Buffer.alloc(len);
    this.buffer.copy(out, 0, this.position, this.position + len);
    this.position += len;
    return out;
  }

  getTreeMapUInt32(): Map<number, number> {
    const map: Map<number, number> = new Map();
    const len = this.getUint16();

    for (let i = 0; i < len; i++) {
      const key = this.getUint16();
      const value = this.getUint32();
      map.set(key, value);
    }

    return map;
  }
}
