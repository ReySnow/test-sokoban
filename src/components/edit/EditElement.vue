<template>
  <div @click="handleClick">
    <img :src="editElement.img" />
  </div>
</template>

<script setup lang="ts">
import { EditElement, useEditElementStore } from '@/store/edit/editElement'

interface Props {
  editElement: EditElement
}

const props = defineProps<Props>()
const { setCurrentSelectedEditElement } = useEditElementStore()

function handleClick() {
  setCurrentSelectedEditElement(props.editElement)
}
</script>

<style scoped></style>
