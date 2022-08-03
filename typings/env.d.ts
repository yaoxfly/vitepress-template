//vite的类型，可用import.meta.glob等
/// <reference types="vite/client" />    
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}