<script setup lang="ts">
const card = [
  {
    number: 1,
    content: '推荐内容1'
  },

  {
    number: 2,
    content: '推荐内容2'
  },

  {
    number: 3,
    content: '推荐内容3'
  },

  {
    number: 4,
    content: '推荐内容4'
  }
]
</script>

<template>
  <div class="recommend-list  common-piece">
    <div v-for="(item, index) in card" :key="`card${index}`" class="recommend-list__card">
      <p class="recommend-list__number" :class="[`recommend-list__color-${item.number > 3 ? 4 : item.number}`]">
        {{ item.number }}
      </p>
      <p class="recommend-list__content">
        {{ item.content }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.recommend-list {
  margin-top: 20px;

  &__card {
    display: flex;
    align-items: flex-start;
    cursor: pointer;

    &:not(:first-child) {
      margin-top: 20px;
    }

    // border-bottom: 1px solid yellow;
    &:hover {
      .recommend-list__content {
        margin-left: 16px !important;
        transition: all 0.5s ease;
      }
    }
  }

  &__number {
    color: #fff;
    text-align: center;
    border-radius: 4px;
    font-size: var(--custom-font-size-assist);
    padding: 0 10px;
    margin-top: 2px;
  }

  &__content {
    margin-left: 12px !important;
    transition: all 0.5s ease;

    &:hover {
      color: var(--vp-c-brand);
    }
  }

  &__color-1 {
    background: #f43f5e;
  }

  &__color-2 {
    background: orange;
  }

  &__color-3 {
    background: #d97706;
  }

  &__color-4 {
    background: #8e8e93;
  }
}
</style>
