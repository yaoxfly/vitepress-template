<script setup lang="ts">
import Tag from './tag.vue'
const tags = [
  { tag: 'vue' },
  { tag: 'React', color: 'rgb(0,216, 255)' },
  { tag: 'git', color: 'red' },
  { tag: '工具', color: 'black' },
  { tag: 'Typescript', color: '#136ec2' },
  { tag: 'Node.js', color: '#026e00' }
]
</script>

<template>
  <div class="common-piece tag-list">
    <Tag v-for="(item, index) in tags" :key="index" class="tag-list-piece" :color="item.color">
      {{ item.tag }}
    </Tag>
  </div>
</template>

<style lang="scss">
.tag-list {
  padding: 8px 0 16px 20px;
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  line-height: 16px;

  &-piece {
    margin-right: 12px;
    margin-top: 8px;
  }
}
</style>
