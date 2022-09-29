<script setup lang="ts">
import { onMounted, toRefs, computed, watch } from 'vue'
interface Props {
  loading: boolean
}
const props = defineProps<Props>()
const { loading } = toRefs(props)

const overflow = computed(() => {
  return loading.value ? 'hidden' : 'inherit'
})

const hiddenNav = computed(() => {
  return loading.value ? 'none' : ''
})

const setStyle = () => {
  const body = window.document.querySelector('body') as HTMLElement
  body.style.overflow = overflow.value
  const vPNav = window.document.querySelector('.VPNav') as HTMLElement
  vPNav.style.display = hiddenNav.value
}

watch(overflow, () => {
  setStyle()
})

onMounted(() => {
  setStyle()
})

</script>

<template>
  <div class="loading-content">
    <div class="loading">
      <span />
    </div>
  </div>
</template>

<style lang="scss">
.loading-content {
  position: fixed;
  z-index: 5;
  background: #fff;
  width: 100%;
  height: 100vh;

  .loading {
    width: 200px;
    height: 60px;
    margin: 0 auto;
    top: 50%;
    position: relative;
    opacity: 1;
    animation: show 0.4s;
  }

  @keyframes show {
    0% {
      opacity: 0;
    }

    100% {
       opacity: 1;
    }

  }

  .loading span {
    width: 50px;
    height: 30px;
    border-radius: 50%;
    background: lightgreen;
    position: absolute;
    top: 50%;
    margin-top: -15px;
    overflow: hidden;
    animation: changePosition 2.08s linear infinite;
  }

  @keyframes changePosition {

    0%,
    100% {
      transform: translate(70px);
    }

    20% {
      width: 50px;
      height: 30px;
      margin-top: -15px;
      transform: translate(0px);
    }

    30% {
      width: 20px;
      height: 60px;
      margin-top: -30px;
      transform: translate(0px);
    }

    35% {
      width: 50px;
      height: 30px;
      margin-top: -15px;
      transform: translate(5px);
      background: lightblue;
    }

    70% {
      width: 50px;
      height: 30px;
      margin-top: -15px;
      transform: translate(160px);
    }

    80% {
      width: 20px;
      height: 60px;
      margin-top: -30px;
      transform: translate(160px);
    }

    85% {
      width: 50px;
      height: 30px;
      margin-top: -15px;
      transform: translate(155px);
      background: lightgreen;
    }
  }
}
</style>
