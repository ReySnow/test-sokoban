<template>
  <div class="absolute" :style="position" @dblclick="handleDbClick">
    <img :src="cargoImg" />
  </div>
</template>

<script setup lang="ts">
import cargoImg from '@/assets/cargo.png'
import { STEP_EDIT, usePositon } from '@/composables/usePosition'
import { EditCargo, useEditCargoStore } from '@/store/edit/editCargo'
interface Props {
  cargo: EditCargo
}
const props = defineProps<Props>()
const { position } = usePositon(props.cargo, STEP_EDIT)
const { removeCargo } = useEditCargoStore()
function handleDbClick() {
  removeCargo(props.cargo)
}
</script>

<style scoped></style>
