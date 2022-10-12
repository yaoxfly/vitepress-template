import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './icon-font/iconfont.css'
import { App, onMounted } from 'vue'
import { dispatchEventStorage } from '../utils/tools'
const modules = import.meta.glob('../component/*.vue')
export default {
  ...DefaultTheme,
  enhanceApp ({ app }: { app: App }) {
    for (const path in modules) {
      modules[path]().then((value: any) => {
        app.component(value.default.name, value.default)
      })
    }
  },

  setup () {
    onMounted(() => {
      dispatchEventStorage()
    })
  }
}
