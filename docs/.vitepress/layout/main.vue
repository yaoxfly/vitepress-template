<!--
* @Author: yx
* @Description: 中间内容区域
-->
<script setup lang="ts">
import Info from './info.vue'
import BlogList from './blog-list.vue'
import TagLists from './tag-lists.vue'
import RecommendList from './recommend-list.vue'
</script>

<template>
  <div class="layout-main">
    <div class="layout-main__left ">
      <BlogList />
    </div>
    <div class="layout-main__right ">
      <Info />
      <RecommendList />
      <TagLists />
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
  }

  @media screen and (width: 768px) {
    .layout-main__left {
      margin-left: 16px;
    }
  }
}
</style>
