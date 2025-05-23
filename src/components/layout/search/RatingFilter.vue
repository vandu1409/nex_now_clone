<template>
  <div class="rounded-lg shadow-xl px-4 py-4 min-w-[300px] space-y-3">
    <h3 class="font-semibold mb-2">Đánh giá</h3>

    <!-- 5 hàng từ 5 sao đến 1 sao -->
    <div v-for="star in [5, 4, 3, 2, 1]" :key="star" class="flex items-center justify-between mb-2 space-x-10">
      <!-- Hình ảnh số sao -->
      <img
        :src="`https://nex-now.com/images/common/star/star-${star}.svg`"
        alt="Star"
        class="h-6"
      />

      <!-- Checkbox -->
        <Checkbox v-model="checked" :value="star" />
    </div>

    <!-- Không đánh giá -->
    <div class="flex items-center justify-between mt-2">
      <span class="text-sm text-gray-600">Không đánh giá</span>
        <Checkbox v-model="checked" value="0" />
    </div>
  </div>
</template>

<script setup>
import Checkbox from 'primevue/checkbox';
import { ref, watch } from 'vue';

const props = defineProps({
  star:Array
})
const checked = ref(props.star)

const emit = defineEmits(['update:star'])

watch(checked,(newVal)=>{
  console.log(newVal)
  emit('update:star',newVal)
})

watch(()=>props.star,(newVal)=>{
  checked.value = newVal
})

</script>
