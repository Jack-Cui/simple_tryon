// src/types/json-bigint.d.ts
declare module 'json-bigint' {
    interface JSONbigOptions {
      strict?: boolean;
      storeAsString?: boolean;
      useNativeBigInt?: boolean;
    }
  
    function JSONbig(options?: JSONbigOptions): {
      parse: (text: string) => any;
      stringify: (value: any) => string;
    };
  
    export = JSONbig;
  }