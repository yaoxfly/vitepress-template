<script setup lang="ts">
import { useAttrs } from 'vue'
import Tag from './tag.vue'
const attrs = useAttrs()
const props = defineProps({
  title: {
    type: String,
    default: () => ''
  },
  content: {
    type: String,
    default: () => ''
  },

  time: {
    type: String,
    default: () => ''
  },

  tag: {
    type: String,
    default: () => ''
  }

})

</script>

<template>
  <div class="card common-piece">
    <p class="card__title">
      {{ title }}
    </p>

    <p class="card__content">
      {{ content }}
    </p>

    <p class="card__time">
      {{ time }}
    </p>

    <tag v-bind="attrs">
      {{ tag }}
    </tag>
  </div>
</template>

<style lang="scss">
.card {
  // line-height: 2;
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
    padding-top: 4px;
  }

  &__time {
    color: var(--vp-c-text-2);
    font-size: var(--custom-font-size-assist);
  }
}
</style>
