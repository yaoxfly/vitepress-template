<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { StorageSetItemEvent, setProperty, getPropertyValue } from '../utils/tools'
import Main from './main.vue'
onMounted(() => {
  init()
})

const init = () => {
  const vpNav = document.querySelector('.Layout .VPNav.no-sidebar') as HTMLElement
  const Layout = document.querySelector('.Layout') as HTMLElement
  vpNav.classList.add('is-home')
  Layout.classList.add('is-home')
  setTheme(window.localStorage.getItem('vitepress-theme-appearance'))
  window.addEventListener('storageSetItemEvent', (e: StorageSetItemEvent) => {
    if (e.key === 'vitepress-theme-appearance') {
      setTheme(e.newValue)
    }
  })
  setImage()
  handleScroll()
  window.addEventListener('scroll', () => { handleScroll() }, true)
}

/** --主题切换 --- */
const setTheme = (value?: string | null) => {
  const vpNav = document.querySelector('.Layout .VPNav.no-sidebar') as HTMLElement
  if (value === 'dark') {
    setProperty('--custom-c-text-1', getPropertyValue('--vp-c-text-light-1'))
    setProperty('--custom-c-nav-bc', 'rgba(36, 36, 36)')
    setProperty('--custom-c-footer-bc', 'bottom')
    // vpNav.classList.add('dark')
    // vpNav.classList.add('dark')
    vpNav.classList.add('filter')
    vpNav.classList.remove('transparent')
  } else {
    setProperty('--custom-c-text-1', getPropertyValue('--vp-c-text-dark-1'))
    setProperty('--custom-c-nav-bc', 'rgba(255, 255, 255, 0.7)')
    setProperty('--custom-c-footer-bc', 'top')
    // vpNav.classList.remove('dark')
    handleScroll(value)
  }
}

/** --图片切换 --- */
const setImage = () => {
  const layoutNav = document.querySelector('.layout__nav') as HTMLElement
  layoutNav.style.background = `url('/home/banner_${Math.round(Math.random()) + 1}.jpg') top center no-repeat`
  layoutNav.style.backgroundSize = '100% 100%' // 100%  100%可以达到平铺效果但是不好看
}

/** --nav滚动样式交替 --- */
const handleScroll = (theme = window.localStorage.getItem('vitepress-theme-appearance')) => {
  if (theme === 'dark') return
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  const vpNav = document.querySelector('.Layout .VPNav.no-sidebar') as HTMLElement
  if (scrollTop > vpNav.offsetHeight) {
    vpNav.classList.add('filter')
    vpNav.classList.remove('transparent')
  } else {
    vpNav.classList.add('transparent')
    vpNav.classList.remove('filter')
  }
}

onUnmounted(() => {
  window.removeEventListener('scroll', () => { handleScroll() })
  const Layout = document.querySelector('.Layout') as HTMLElement
  Layout.classList.remove('is-home')
})

</script>

<script lang="ts">
export default {
  name: 'Layout'
}
</script>

<template>
  <div class="layout">
    <section class="layout__nav">
      <div class="layout__banner-text">
        <div>
          <p>技术改变世界</p>
          <p class="layout__banner-animation">
            Technology Change The World
          </p>
        </div>
      </div>
    </section>

    <Main />
  </div>
</template>

<style lang="scss">
/**---整体布局--- */
.Layout {
  &.is-home {
    background: var(--vp-c-bg-alt);
  }

  .VPNav.no-sidebar.is-home {
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

    .VPNavBarMenuLink.active {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 50%;
        height: 1px;
        background: var(--vp-c-brand);
        bottom: 0;
        left: 0;
        left: 25%;
        top: 42px;
      }
    }

    .VPSocialLink {
      margin-bottom: 2px;
    }

    /*------不再改变的--end------*/
    // color: #fff;

    .VPNav.no-sidebar.is-home {
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
        transition: background-color 1s ease;
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

/**---中间内容区域--- */

.layout {
  &__nav {
    width: 100%;
    height: 60vh;
  }

  &__banner-text {
    //一定要定宽、定高才能垂直居中
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &__banner-animation {
    width: 210px;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid transparent;
    animation: go 5s steps(32), off 1s steps(1) 5;

    @keyframes go {
      from {
        width: 0;
      }
      100% {
        width: 210px;
      }
    }

    @keyframes off {
      50% {
       border-right-color: #fff;
      }
    }
  }

  @media screen and (max-width: 750px) {
    .layout__nav {
      height: 40vh;
    }
  }
}

/**---footer--- */
.VPFooter {
  background-image: linear-gradient(to var(--custom-c-footer-bc), rgba(50, 50, 50, 1), rgba(25, 26, 50, 0.8)),
    url('/home/footer.jpg');

  .message,
  .copyright {
    color: var(--vp-c-text-dark-1);
  }
}
</style>
