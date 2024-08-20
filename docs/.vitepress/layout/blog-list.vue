<script setup lang="ts">
import Card from './card.vue'
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRouter, withBase } from 'vitepress'
const list = [
  {
    title: '1',
    content: '如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码 如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码',
    time: '2022-10-01',
    tag: 'vue'
  },
  {
    title: '2',
    content: '如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码 如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码',
    time: '2022-10-04',
    tag: 'vue'
  },
  {
    title: '3',
    content: '如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码 如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码',
    time: '2022-10-06',
    tag: 'vue'
  },
  {
    title: '4',
    content: '如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码 如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码',
    time: '2022-10-12',
    tag: 'vue'
  },
  {
    title: '5',
    content: '如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码 如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码',
    time: '2022-10-18',
    tag: 'vue'
  },

  {
    title: '6',
    content: '如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码 如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码',
    time: '2022-10-06',
    tag: 'vue'
  },
  {
    title: '7',
    content: '如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码 如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码',
    time: '2022-10-06',
    tag: 'vue'
  },
  {
    title: '8',
    content: '如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码 如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码',
    time: '2022-10-20',
    tag: 'vue'
  },
  {
    title: '9',
    content: '如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码 如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码',
    time: '2022-10-06',
    tag: 'vue'
  },
  {
    title: '10',
    content: '如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码 如何将 Vue2 代码一键转成 Vue3 代码如何将 Vue2 代码一键转成 Vue3 代码',
    time: '2022-10-30',
    tag: 'vue'
  }
]
list.sort((a, b) => a.time < b.time ? 1 : -1)
interface Data {
  title?: string
  content?: string,
  time?: string
  tag?: string
  path?: string
}
const data = ref<Array<Data>>([])
const total = list.length
const currentPage = ref(1)
const pageSize = 4
const startPage = computed(() => (currentPage.value - 1) * pageSize)
const endPage = computed(() => currentPage.value * pageSize > total ? total : currentPage.value * pageSize)
const totalPage = Math.ceil(total / pageSize)
const loading = ref(false)
const loadData = () => {
  if (data.value.length === total) {
    loading.value = true
    currentPage.value = totalPage
    return
  }

  for (let index = startPage.value; index < endPage.value; index++) {
    const element = list[index]
    data.value.push(element)
  }
  currentPage.value++
}

/*
-----scrollHeight、clientHeight 在DTD已声明的情况下用documentElement，未声明的情况下用body,
不同浏览器body.scrollTop或documentElement.scrollTop总有一个为0-----
*/

// 滚动条在Y轴上的滚动距离
const getScrollTop = () => {
  return document.body.scrollTop + document.documentElement.scrollTop
}

// 浏览器可视部分高度
const getWindowHeight = () => {
  return document.compatMode === 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight
}

// 文档的总高度
const getScrollHeight = () => {
  return document.compatMode === 'CSS1Compat' ? document.documentElement.scrollHeight : document.body.scrollHeight
}

let timer: ReturnType<typeof setTimeout> | null = null
const debounce = (fn: () => void, delay: number, isImmediate = false) => {
  timer && clearTimeout(timer)
  if (isImmediate && timer === null) {
    fn()
    timer = null
    return
  }
  timer = setTimeout(() => {
    fn()
    timer = null
  }, delay)
}

const handleScroll = () => {
  const relative = 100 // 相对距离
  if (getScrollTop() + getWindowHeight() >= getScrollHeight() - relative) {
    debounce(loadData, 500)
  }
}

const { go } = useRouter() // 不能写函数里
const jump = (path?: string) => {
  go(withBase(`${'/blog/details'}`))
}

const init = () => {
  loadData()
  window.addEventListener('scroll', handleScroll)
}

onMounted(() => {
  init()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <div class="blog-list">
    <Card v-for="(item, index) in data" :key="`card-${index}`" :title="item.title" :content="item.content"
      :time="item.time" :tag="item.tag" @click="jump(item.path)" />

    <div v-show="loading" class="blog-list__bottom-text">
      <span>我也是有底线的~</span>
    </div>
  </div>
</template>

<style lang="scss">
.blog-list {
  .card {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    .card {
      margin-top: 20px;
    }
  }

  &__bottom-text {
    text-align: center;
    padding-top: 20px;
  }
}
</style>
