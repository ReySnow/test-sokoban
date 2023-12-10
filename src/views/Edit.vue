<template>
  <div>
    <div class="flex">
      <div class="w-4/6 bg-purple-400">
        <MapEdit />
      </div>
      <div>数据展示</div>
    </div>
    <div>
      <EditElementView />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditElementView from '@/components/edit/EditElementView.vue'
import MapEdit from '@/components/edit/MapEdit.vue'
</script>

<style scoped></style>
