<script setup lang="ts">
import { onMounted, onUnmounted, onRenderTriggered, reactive, watch, ref } from "vue"
import { useCommStore } from "../store/commStore"

defineProps<{ msg: string }>()
const emits = defineEmits(["click"])

const commStore = useCommStore()

const dom = ref<any>(null)

const state = reactive({
  count: 0,
  list: [] as number[],
  select: 0,
})

const addCount = () => {
  state.count += 1
}

const onSelect = (item: number) => {
  state.select = item
}

watch(
  () => state.select,
  (newValue) => {
    console.log(newValue)
    document.title = "我选择了：" + newValue
  },
)

onMounted(() => {
  console.log(dom.value)

  state.list = [...state.list, 1, 2, 3, 4, 5, 6]
})

onRenderTriggered((e) => {
  console.log(e)
})

onUnmounted(() => {
  console.log("我卸载了")
})
</script>

<template>
  <h1 @click="emits('click')" class="text-orange-900">{{ msg }}</h1>

  <div ref="dom" class="card">
    <button type="button" @click="addCount">count is {{ state.count }}</button>

    <div>我选择了：{{ state.select }}</div>

    <div v-for="item in state.list" :key="item">
      <button @click="onSelect(item)">我是： {{ item }}</button>
    </div>

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <button type="button" @click="commStore.increment">store count is {{ commStore.count }}</button>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
    official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
