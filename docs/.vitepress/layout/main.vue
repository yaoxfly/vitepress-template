<!--
* @Author: yx
* @Description: 内容区域
-->
<script setup lang="ts">
import Info from './info.vue'
import Card from './card.vue'
</script>

<template>
  <div class="layout-main">
    <div class="layout-main__left ">
      <Card />
    </div>
    <div class="layout-main__right ">
      <Info />
    </div>
  </div>
</template>

<style lang="scss">
.layout-main {
  padding: 32px 0;
  animation: fadeDownIn 1s both;
  @keyframes fadeDownIn {
    from {
      opacity: 0;
      transform: translate(0, 50px);
    }

    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  @media (min-width: 1280px) {
    width: 1200px;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    display: flex;

    &__left {
      width: calc(76% - 16px);

    }

    &__right {
      width: 24%;
      margin-left: 16px;
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    display: flex;
    flex-flow: column-reverse;
    align-items: center;

    &__left {
      width: 80%;
    }

    &__right {
      width: 80%;
    }

    .card {
      margin-top: 20px;
    }
  }

  @media screen and (width: 768px) {
    .layout-main__left {
      margin-left: 16px;
    }
  }
}
</style>
