<script setup lang="ts">
import { toRefs, computed } from 'vue'
interface Props {
  theme: string | null
}
const props = defineProps<Props>()
const { theme } = toRefs(props)

const opacity = computed(() => {
  return theme.value === 'dark' ? 0.4 : 0.2
})

</script>

<template>
  <div class="meteor-shower">
    <section>
      <span class="span" />
      <span class="span" />
      <span class="span" />
      <span class="span" />
      <span class="span" />
      <span class="span" />
      <span class="span" />
      <span class="span" />
      <span class="span" />
      <span class="span" />
    </section>
  </div>
</template>

<style lang="scss">
.meteor-shower {
  section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: v-bind(opacity);
    z-index: 1;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    animation: animate 4s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(315deg) translateX(-100px);
      opacity: 1;
    }

    70% {
      opacity: 1;
    }

    100% {
      transform: rotate(315deg) translateX(-80vh);
      opacity: 0;
    }
  }

  span {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 1px;
      background: linear-gradient(90deg, #fff, transparent);
    }

    &:nth-child(1) {
      top: 0;
      right: 0;
      left: initial;
      animation-delay: 0;
      animation-duration: 2s;
    }

    &:nth-child(2) {
      top: 0;
      right: 900px;
      left: initial;
      animation-delay: 0.6s;
      animation-duration: 2s;
    }

    &:nth-child(3) {
      top: 80px;
      right: 100px;
      left: initial;
      animation-delay: 0.4s;
      animation-duration: 3s;
    }

    &:nth-child(4) {
      top: 0;
      right: 180px;
      left: initial;
      animation-delay: 1s;
      animation-duration: 2.5s;
    }

    &:nth-child(5) {
      top: 0;
      right: 600px;
      left: initial;
      animation-delay: 1.2s;
      animation-duration: 3.5s;
    }

    &:nth-child(6) {
      top: 0;
      right: 400px;
      left: initial;
      animation-delay: 1.4s;
      animation-duration: 4s;
    }

    &:nth-child(7) {
      top: 300px;
      right: 240px;
      left: initial;
      animation-delay: 0.2s;
      animation-duration: 3.75s;
    }

    &:nth-child(8) {
      top: 0;
      right: 700px;
      left: initial;
      animation-delay: 1.8s;
      animation-duration: 3.25s;
    }

    &:nth-child(9) {
      top: 0;
      right: 900px;
      left: initial;
      animation-delay: 1.8s;
      animation-duration: 3s;
    }

    &:nth-child(10) {
      top: 0;
      right: 360px;
      left: initial;
      animation-delay: 2.6s;
      animation-duration: 3.54s;
    }
  }

  @media (max-width: 960px) {
    span::before {
      width: 50px;
    }

    @keyframes animate {
      0% {
        transform: rotate(315deg) translateX(-100px);
        opacity: 1;
      }

      70% {
        opacity: 1;
      }

      100% {
        transform: rotate(315deg) translateX(-40vh);
        opacity: 0;
      }
    }
  }
}
</style>
