<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { StorageSetItemEvent, setProperty, getPropertyValue, imgReady } from '../utils/tools'
import Main from './main.vue'
import { withBase } from 'vitepress'
import MeteorShower from './meteor-shower.vue'
import Loading from './loading.vue'

/** --banner --- */
const num = Math.round(Math.random()) + 1
const img = withBase(`/home/banner_${num}.jpg`)
const minImg = withBase(`/home/banner_min_${num}.jpg`)
const image = ref(`url('${img}') top center no-repeat`)
const minImage = ref(`url('${minImg}') top center no-repeat`)
const loading = ref(false)
loading.value = true
imgReady([img]).then((res) => {
  loading.value = false
})

/** --theme --- */
const theme = ref('')
const setTheme = (value?: string | null) => {
  const vpNav = document.querySelector('.Layout .VPNav.is-home') as HTMLElement
  if (value === 'dark') {
    setProperty('--custom-c-text-1', getPropertyValue('--vp-c-text-light-1'))
    setProperty('--custom-c-nav-bc', 'rgba(36, 36, 36)')
    setProperty('--custom-c-footer-bc', 'bottom')
    // 不在首页找不到vpNav
    vpNav?.classList.add('filter')
    vpNav?.classList.remove('transparent')
    theme.value = 'dark'
  } else {
    setProperty('--custom-c-text-1', getPropertyValue('--vp-c-text-dark-1'))
    setProperty('--custom-c-nav-bc', 'rgba(255, 255, 255, 0.7)')
    setProperty('--custom-c-footer-bc', 'top')
    scroll(value)
    theme.value = 'auto'
  }
}

/** --nav --- */
const scroll = (theme = window.localStorage.getItem('vitepress-theme-appearance')) => {
  if (theme === 'dark') return
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  const vpNav = document.querySelector('.Layout .VPNav.is-home') as HTMLElement
  const VPNavBar = document.querySelector('.Layout .VPNavBar') as HTMLElement
  VPNavBar?.classList.remove('fill') // 61版本白天模式需要去除当前样式
  if (scrollTop > vpNav?.offsetHeight) {
    vpNav?.classList.add('filter')
    vpNav?.classList.remove('transparent')
  } else {
    vpNav?.classList.add('transparent')
    vpNav?.classList.remove('filter')
  }
}

const scrollToContent = () => {
  const now = window.scrollY
  const layoutMain = document.querySelector('.layout__nav') as HTMLElement
  let dist = layoutMain.offsetHeight - 60
  // 可滚动高度 = 整个文档的高度 - 浏览器窗口的视口（viewport）高度
  const availableHeight = document.documentElement.scrollHeight - window.innerHeight
  if (dist > availableHeight) {
    dist = availableHeight
  }
  const step = (dist - now) / 10
  setTimeout(() => {
    // 如果当前的滚动的距离不大于 10px，则直接滚动到目标位置，并退出递归
    if (Math.abs(step) <= 10) {
      return window.scrollTo(0, dist)
    }
    window.scrollTo(0, now + step)
    scrollToContent()
  }, 10)
}

/** --init --- */
const scrollFn = () => { scroll() }
const storageSetItemEvent = (e: StorageSetItemEvent) => {
  if (e.key === 'vitepress-theme-appearance') {
    setTheme(e.newValue)
  }
}
const showStartBtn = ref(true)
const resize = () => {
  const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  showStartBtn.value = true
  if (w <= 960) {
    showStartBtn.value = false
  }
}

const init = () => {
  const customLayout = document.querySelector('.layout ') as HTMLElement
  const vpNav = document.querySelector('.Layout .VPNav') as HTMLElement
  const Layout = document.querySelector('.Layout') as HTMLElement
  customLayout && vpNav?.classList.add('is-home')
  customLayout && Layout?.classList.add('is-home')
  theme.value = window.localStorage.getItem('vitepress-theme-appearance') || ''
  setTheme(theme.value)
  window.addEventListener('storageSetItemEvent', storageSetItemEvent)
  scrollFn()
  window.addEventListener('scroll', scrollFn)
  resize()
  window.addEventListener('resize', resize)
}

onMounted(() => {
  init()
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollFn)
  window.removeEventListener('storageSetItemEvent', storageSetItemEvent)
  window.removeEventListener('resize', resize)
  const Layout = document.querySelector('.Layout') as HTMLElement
  const VPNav = document.querySelector('.Layout .VPNav') as HTMLElement
  Layout?.classList.remove('is-home')
  if (VPNav) {
    VPNav.classList.remove('is-home')
    VPNav.classList.remove('transparent')
  }
})

</script>

<script lang="ts">
export default {
  name: 'Layout'
}
</script>

<template>
  <div class="layout">
    <Loading v-show="loading" :loading="loading" />
    <section class="layout__nav">
      <div class="layout__banner-text">
        <div>
          <p>技术改变世界</p>
          <p class="layout__banner-animation">
            Technology Change The World
          </p>

          <span v-if="showStartBtn" class="layout__nav-button" @click="scrollToContent">开始探索</span>
        </div>
      </div>
      <MeteorShower :theme="theme" />
    </section>
    <Main />
  </div>
</template>

<style lang="scss">
/**---整体布局--- */
.Layout {

  .vp-doc.container {
    padding: 0;
    max-width: 100%
  }

  &.is-home {
    background: var(--vp-c-bg-alt);

    //距离footer的距离
    .VPHome {
      padding-bottom: 0;
    }

    @media (min-width: 768px) {
      .VPHome {
        padding-bottom: 0;
      }

    }

    @media (min-width:960px) {
      .VPNavBar:not(.has-sidebar):not(.home.top) .divider {
        background-color: transparent;
        display: none;
      }

    }

  }

  .VPNav {
    &.transparent {
      .VPNavBarTitle {
        @media (min-width: 960px) {
          .title {
            color: var(--custom-c-text-1);
          }
        }
      }
    }

    &.filter {
      .VPNavBarTitle {
        @media (min-width: 960px) {
          .title {
            color: inherit;
          }
        }
      }
    }
  }
}

@media (min-width: 960px) {
  .Layout {

    /*------不再改变的--------*/
    .VPContent.is-home {
      padding-top: 0;
    }

    .VPSocialLink {
      margin-bottom: 2px;
    }

    /*------不再改变的--end------*/

    .VPNav.is-home {
      &.transparent {
        backdrop-filter: none;
        background: transparent;

        .VPNavBarMenuLink {
          color: var(--custom-c-text-1);
        }

        .VPFlyout:hover .text {
          color: var(--custom-c-text-1);
        }

        .VPFlyout .text {
          color: var(--custom-c-text-1);
        }

        .VPFlyout .icon {
          color: var(--custom-c-text-1);
        }

        .menu+.translations::before,
        .menu+.appearance::before,
        .menu+.social-links::before,
        .translations+.appearance::before,
        .appearance+.social-links::before {
          background-color: var(--vp-c-divider-dart)
        }

        .VPSocialLink {
          color: var(--custom-c-text-1);
        }
      }

      &.filter {
        backdrop-filter: saturate(50%) blur(8px);
        /* 背景色-平滑变换 */
        transition: background-color 0.5s ease;
        background: var(--custom-c-nav-bc);

        .VPNavBarMenuLink {
          color: inherit;
        }

        .VPFlyout:hover .text {
          color: inherit;
        }

        .VPFlyout .text {
          color: inherit;
        }

        .VPFlyout .icon {
          color: inherit;
        }

        .menu+.translations::before,
        .menu+.appearance::before,
        .menu+.social-links::before,
        .translations+.appearance::before,
        .appearance+.social-links::before {
          background-color: var(--vp-c-divider-light)
        }
      }

      .VPSocialLink {
        color: inherit;
      }
    }
  }
}

@media (min-width: 768px) {
  .DocSearch-Button {
    height: 28px;
  }
}

/**---中间内容区域(自定义)--- */
.layout {

  &__nav {
    width: 100%;
    height: 100vh;
    background: v-bind(image);
    animation: fadeInDown 1s both;
    background-size: 100% 100%;
    position: relative;

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translate(0, -50px);
      }

      to {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    @keyframes hidden {
      from {
        opacity: 1;
        z-index: 1;
      }

      to {
        opacity: 0;
        z-index: -1
      }
    }

    &::after {
      content: '';
      position: absolute;
      background: v-bind(minImage);
      background-size: 100% 100%;
      animation: hidden 2s ease;
      opacity: 0;
      z-index: -1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    &-button {
      position: absolute;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      z-index: 2;
      bottom: 10vh;
      font-size: var(--custom-font-size-content);
      color: #fff;
      border: 1px solid #fff;
      padding: 4px 12px;
      border-radius: 4px;
      cursor: pointer;
      transition: all .5s linear;
      user-select: none;

      &:hover {
        color: var(--vp-c-text-light-1);
        background: #fff;
      }
    }
  }

  &__banner-text {
    //一定要定宽、定高才能垂直居中
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 2;
  }

  &__banner-animation {
    width: 240px;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid transparent;
    animation: go 5s steps(32), off 1s steps(1) 5;

    @keyframes go {
      from {
        width: 0;
      }

      100% {
        width: 240px;
      }
    }

    @keyframes off {
      50% {
        border-right-color: #fff;
      }
    }
  }

  @media screen and (max-width: 960px) {
    .layout__nav {
      height: 40vh;
    }
  }
}

/**---footer--- */
.VPFooter {
  background-image: linear-gradient(to var(--custom-c-footer-bc), rgba(50, 50, 50, 1), rgba(25, 26, 50, 0.8)),
    url('/home/footer.jpg');
  animation: footer 10s linear infinite;

  @keyframes footer {
    from {
      background-position-y: 0;
    }

    to {
      background-position-y: center;
    }
  }

  .message,
  .copyright {
    color: var(--vp-c-text-dark-1);
  }
}
</style>
