/// <reference types="node" />

// utils/envVar.ts から使用すること
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly SUPABASE_URL: string
    readonly SUPABASE_KEY: string
  }
}
