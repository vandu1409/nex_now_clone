<template>
  <div class="rounded-lg shadow-xl px-4 py-4 min-w-[300px] space-y-3">
    <div>
        <button class="px-6 py-2 rounded-2xl">Tìm trên bản đồ</button>
    </div>
    <div class="card flex justify-center rounded-lg">
        <Slider v-model="value" range class="w-56" />
    </div>
  </div>
</template>

<script setup>
import Slider from 'primevue/slider';

const value = ref([20, 80]);

</script>
