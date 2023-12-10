<template>
  <div>
    <div class="flex" v-for="(row, i) in map" :key="i">
      <div v-for="(_, j) in row">
        <MapBlock :x="j" :y="i"></MapBlock>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMapEditStore } from '@/store/edit/mapEdit'
import MapBlock from './MapBlock.vue'

const { map } = useMapEditStore()
</script>

<style scoped></style>
