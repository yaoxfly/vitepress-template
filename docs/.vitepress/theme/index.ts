import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { App } from 'vue'
const modules = import.meta.glob('../component/*.vue')
export default {
  ...DefaultTheme,
  enhanceApp ({ app }: { app: App }) {
    for (const path in modules) {
      modules[path]().then((value: any) => {
        app.component(value.default.name, value.default)
      })
    }
  }
}
