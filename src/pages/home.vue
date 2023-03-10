<template>
  <div>home</div>
  <div>home store count {{ commStore.count }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useCommStore } from "../store/commStore"

export default defineComponent({
  name: "Home",
  setup() {
    const commStore = useCommStore()

    return {
      commStore,
    }
  },
})
</script>

<style scoped></style>
