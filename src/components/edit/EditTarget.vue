<template>
  <div class="absolute" :style="position" @dblclick="handleDbClick">
    <img :src="targetImg" />
  </div>
</template>

<script setup lang="ts">
import targetImg from '@/assets/target.png'
import { STEP_EDIT, usePositon } from '@/composables/usePosition'
import { EditTarget, useEditTargetStore } from '@/store/edit/editTarget'
interface Props {
  target: EditTarget
}
const props = defineProps<Props>()
const { position } = usePositon(props.target, STEP_EDIT)
const { removeTarget } = useEditTargetStore()
function handleDbClick() {
  removeTarget(props.target)
}
</script>

<style scoped></style>
