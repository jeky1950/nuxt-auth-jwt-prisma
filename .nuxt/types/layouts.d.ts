import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/petal/Desktop/Work/nuxt-auth-jwt-prisma/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}