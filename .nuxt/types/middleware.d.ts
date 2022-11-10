import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth" | "not-auth"
declare module "C:/Users/petal/Desktop/Work/nuxt-auth-jwt-prisma/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}