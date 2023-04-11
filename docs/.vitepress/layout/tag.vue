<script setup lang="ts">
import { toRefs, watch, ref, onMounted } from 'vue'
import { getPropertyValue } from '@/utils/tools'
import { KeyMap } from '@/utils/type'
const props = defineProps({
  color: {
    type: String,
    default () {
      return 'green'
    }
  }
})

onMounted(() => {
  colorTransform()
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

const colorTransform = () => {
  const keyMap:KeyMap = {
    red: getPropertyValue('--vp-c-red'),
    green: getPropertyValue('--vp-c-green'),
    yellow: getPropertyValue('--vp-c-yellow'),
    gray: getPropertyValue('--vp-c-gray'),
    black: getPropertyValue('--vp-c-black')
  }
  tempColor.value = keyMap[color.value] || tempColor.value
}

</script>

<template>
  <div class="tag">
    <slot />
  </div>
</template>

<style lang="scss">
.tag {
  display: inline;
  border-radius: 4px;
  background: v-bind(tempColor);
  padding: 4px 8px;
  font-size: var(--custom-font-size-assist);
  text-align: center;
  color: #fff;
  cursor: pointer;
  user-select: none;
}
</style>
