<script setup lang="ts">
import { toRefs, watch, ref } from 'vue'
import { getPropertyValue } from '../utils/tools'
const props = defineProps({
  color: {
    type: String,
    default () {
      return 'green'
    }
  }
})

const { color } = toRefs(props)
/* ----颜色值--- */
const tempColor = ref('')
watch(color, (newName) => {
  tempColor.value = newName
},
{
  immediate: true
}
)

const keyMap = {
  red: getPropertyValue('--vp-c-red'),
  green: getPropertyValue('--vp-c-green'),
  yellow: getPropertyValue('--vp-c-yellow'),
  gray: getPropertyValue('--vp-c-gray'),
  black: getPropertyValue('--vp-c-black')
}

tempColor.value = keyMap[color.value]
</script>

<template>
  <div class="tag">
    <slot />
  </div>
</template>

<style lang="scss">
.tag {
  display: inline;
  width: 100%;
  border-radius: 4px;
  background: v-bind(tempColor);
  padding: 4px 8px;
  font-size: var(--custom-font-size-assist);
  text-align: center;
  color: #fff;
}
</style>
