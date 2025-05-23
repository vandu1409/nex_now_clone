<template>
  <!-- Giả sử PromoCard cao ~ h-64, bạn có thể điều chỉnh theo thực tế -->
  <div class="rounded-lg overflow-hidden w-full h-96 relative">
    <!-- Skeleton block phủ kín -->
    <Skeleton
      class="absolute inset-0 block"
      width="100%"
      height="100%"
    />
  </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>
