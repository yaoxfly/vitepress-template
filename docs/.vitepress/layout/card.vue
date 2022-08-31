<script setup lang="ts">
import Tag from './tag.vue'
</script>

<template>
  <div class="card common-piece">
    <p class="card__title">
      我是标题标题标题标题我是标题标题标题标题我是标题标题标题标题我是标题标题标题标题我是标题标题标题标题我是标题标题标题标题
    </p>

    <p class="card__content">
      如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码 如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码
    </p>

    <p class="card__time">
      2021-10-06
    </p>

    <tag>
      vue
    </tag>
  </div>
</template>

<style lang="scss">
.card {
  line-height: 2;
  cursor: pointer;

  // margin-top: 20px;
  &__title {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--vp-c-text-1);
    font-weight: bold;
    font-size: var(--custom-font-size-title);
  }

  &__content {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: var(--custom-font-size-content);
  }

  &__time {
    color: var(--vp-c-text-2);
    font-size: var(--custom-font-size-content);
  }
}
</style>
