import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["colorMode"]?: typeof import("C:/Users/petal/Desktop/Work/nuxt-auth-jwt-prisma/node_modules/@nuxtjs/color-mode/dist/module.mjs").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     JWT_TOKEN_SECRET: string,

    app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },
  }
  interface PublicRuntimeConfig {
     JWT_TOKEN_SECRET: string,
  }
}