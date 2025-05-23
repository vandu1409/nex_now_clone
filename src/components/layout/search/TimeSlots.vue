<template>
  <div class="flex flex-wrap gap-2 mt-2">
    <span v-for="time in times" :key="time" class="bg-gray-200 px-2 py-1 rounded text-sm">{{ time }}</span>
  </div>
</template>

<script setup>
defineProps(['times'])
</script>
