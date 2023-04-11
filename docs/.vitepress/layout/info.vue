<!--
* @Author: yx
* @Description: 用户信息
-->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
/** 关注我 背景色 */
import { StorageSetItemEvent, getPropertyValue } from '@/utils/tools'
import { KeyMap } from '@/utils/type'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let storageSetItemEvent: any = null
const bookmarkBac = ref('')
const setFocusBac = () => {
  bookmarkBac.value = window.localStorage.getItem('vitepress-theme-appearance') === 'dark' ? '#484848' : getPropertyValue('--vp-c-black')
  storageSetItemEvent = (e: StorageSetItemEvent) => {
    if (e.key === 'vitepress-theme-appearance') {
      const keyMap:KeyMap = {
        dark: '#484848',
        auto: getPropertyValue('--vp-c-black')
      }
      bookmarkBac.value = keyMap[e.newValue || 'auto']
    }
  }
  window.addEventListener('storageSetItemEvent', storageSetItemEvent)
}

onMounted(() => {
  // ssr window必须写在onMounted生命周期里
  setFocusBac()
})

const socialLinks = [
  {
    path: 'https://github.com/yaoxfly',
    icon: 'icon-github'
  },
  {
    path: 'https://gitee.com/yaoxfly',
    icon: 'icon-gitee'
  }
]

type SocialLinks = {
  path?: string,
  icon?: string
}

const jump = (param: SocialLinks) => {
  window.open(param.path)
}

onUnmounted(() => {
  window.removeEventListener('storageSetItemEvent', storageSetItemEvent)
})

</script>

<template>
  <div class="layout-info common-piece">
    <div class="layout-info__flex">
      <div class="layout-info__flex-img">
        <img
          src="/home/header.jpg"
          class="layout-info__header"
        >
      </div>
      <span class="layout-info__title">yaoxfly</span>
      <div class="layout-info__data">
        <section>
          <p>文章</p>
          <p class="common-bold">
            1
          </p>
        </section>
        <section>
          <p>标签</p>
          <p class="common-bold">
            1
          </p>
        </section>
      </div>

      <div
        class="layout-info__add-bookmark"
        @click="
          jump({
            path: 'https://github.com/yaoxfly',
          })
        "
      >
        关注我
      </div>

      <div class="layout-info__icon-content">
        <p
          v-for="(item, index) in socialLinks"
          :key="`socialLinks${index}`"
          class="iconfont layout-info__icon"
          :class="[
            item.icon,
            { 'layout-info__special-icon': item.icon === 'icon-gitee' },
          ]"
          @click="jump(item)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.layout-info {
  &__header {
    width: 80px;
    border-radius: 50%;
  }

  &__title {
    color: var(--vp-c-text-1);
    font-weight: bold;
    font-size: var(--custom-font-size-title);
  }

  &__flex {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    text-align: center;
  }

  &__flex-img {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-content: center;
  }

  &__data {
    width: 100%;
    display: flex;
    justify-content: space-around;

    section {
      margin-top: 8px;
    }
  }

  &__add-bookmark {
    line-height: 2;
    background: v-bind(bookmarkBac) ;
    color: #fff;
    user-select: none;
    cursor: pointer;
    margin-top: 8px;
    border-radius: 4px;
    position: relative;
    z-index: 1;
    &::after {
      position: absolute;
      content: '';
      z-index: -1;
      background: var(--vp-c-brand);
      width: 0%;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      border-radius: 4px;
      transition: width 0.5s ease;
    }

    &:hover::after {
      width: 100%;
      transition: width 0.5s ease;
    }
  }

  &__icon {
    font-size: 24px;
    transition: color 0.4s ease;
    &:hover {
      cursor: pointer;
      color: var(--vp-c-brand);
      transition: color 0.4s ease;
    }
  }

  &__icon-content {
    display: flex;
    justify-content: center;
    margin-top: 8px;
    p:not(:first-child) {
      margin-left: 12px;
    }
  }

  &__special-icon {
    font-size: 22px;
  }
}
</style>
