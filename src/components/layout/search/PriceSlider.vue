<template>
    <div class="py-6 px-4 bg-[#F8EFFF] rounded-t-xl flex justify-end">
        <button
            class="px-6 bg-[#EFD7F9] py-2 rounded-3xl border-2 border-primary text-primary font-semibold hover:bg-[#d8b9ef] transition">
            Tìm trên bản đồ
        </button>
    </div>
    <div class="rounded-xl shadow-xl px-5 py-5 min-w-[320px] space-y-5 bg-white">
        <h1 class="font-semibold text-lg text-gray-900">Giá</h1>

        <div class="px-1">
            <Slider v-model="value" range class="w-full" :style="{ '--slider-thumb-bg': '#5F1F76' }" :min="0" :max="9000000" />
            <div class="flex justify-between text-xs text-gray-500 mt-1 px-1">
                <span>{{ formatCurrency(value[0]) }}</span>
                <span>{{ formatCurrency(value[1]) }}</span>
            </div>
        </div>

        <Divider></Divider>
       
        <div class="text-sm text-gray-800 px-1">
            Đã chọn: <b>{{ formatCurrency(value[0]) }}</b> - <b>{{ formatCurrency(value[1]) }}</b>
        </div>
    </div>
</template>

<script setup>
import { Divider } from 'primevue';
import Slider from 'primevue/slider';
import { ref, watch } from 'vue';

const value = ref([0, 9000000]);

const props = defineProps({
  modelValue: Array
})
const emit = defineEmits(['update:modelValue'])

const localValue = ref(props.modelValue || [0, 9000000])

watch(() => props.modelValue, val => {
  localValue.value = val || [0, 9000000]
})

watch(value, val => {
  emit('update:modelValue', val)
})

// watch(props.modelValue,(newVal)=>{
//     localValue.value
// })

function formatCurrency(val) {
    return val.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', 'đ');
}
</script>

<style>
.p-slider-handle {
    background-color: var(--slider-thumb-bg) !important;
    border: none !important;
}
</style>
