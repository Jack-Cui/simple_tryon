export default class BufferWriter {
  private buffer = Buffer.alloc(1024);
  private position = 0;

  pack(): Buffer {
    const out = Buffer.alloc(this.position);
    this.buffer.copy(out, 0, 0, out.length);
    return out;
  }

  putUint16(v: number): BufferWriter {
    this.buffer.writeUInt16LE(v, this.position);
    this.position += 2;
    return this;
  }

  putUint32(v: number): BufferWriter {
    this.buffer.writeUInt32LE(v, this.position);
    this.position += 4;
    return this;
  }

  putBytes(bytes: Buffer): BufferWriter {
    this.putUint16(bytes.length);
    bytes.copy(this.buffer, this.position);
    this.position += bytes.length;
    return this;
  }

  putString(str: string): BufferWriter {
    return this.putBytes(Buffer.from(str));
  }

  putTreeMapUInt32(map: Map<number, number>): BufferWriter {
    this.putUint16(map.size);

    map.forEach((value, key) => {
      this.putUint16(key);
      this.putUint32(value);
    });

    return this;
  }
}
