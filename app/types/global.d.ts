/// <reference types="node" />

// utils/envVar.ts から使用すること
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly API_ENDPOINT: string
  }
}
