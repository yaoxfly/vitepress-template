<!--
* @Author: yx
* @Description: 右边的用户信息
-->

<template>
  <div class="layout-info common-piece ">
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
            0
          </p>
        </section>
        <section>
          <p>标签</p>
          <p class="common-bold">
            1
          </p>
        </section>
      </div>

      <div class="layout-info__add-bookmark">
        加入标签
      </div>

      <!-- <div class="special-layout-info__icon-content">
        <p class="iconfont icon-github special-layout-info__icon" @click="jump(1)" />
        <p class="iconfont icon-gitee special-layout-info__icon" @click="jump(2)" />
      </div> -->
    </div>
  </div>
</template>
<!--
<script>

export default {
  mounted () { },
  methods: {
    // 跳到GitHub
    jump (param) {
      const keyMap = {
        1: () => {
          window.open('https://github.com/yaoxfly', 'target')
        },
        2: () => {
          window.open('https://gitee.com/yaoxfly', 'target')
        }
      }
      keyMap[param]()
    }
  }
}
</script> -->

<style lang="scss">
.layout-info {
  // margin-top: 20px;
  padding-bottom: 1rem;

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
      margin-top: 20px;
    }
  }

  &__add-bookmark {
    line-height: 2;
    background: #333;
    color: #fff;
    user-select: none;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
      background: var(--vp-c-brand);

    }
  }

  &__icon {
    font-size: 26px;

    &:hover {
      cursor: pointer;
      color: var(--vp-c-brand);
    }
  }

  &__icon-content {
    display: flex;
    justify-content: flex-start;

    p:not(:first-child) {
      margin-left: 15px;
    }
  }
}
</style>
