<template>
    <div class="space-x-3">
        <button v-for="(item, index) in tabs" :key="index" @click="$emit('update:selected', item.id)" :class="[
            'flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-colors duration-200',
            `pi ${item.icon}`,
            selected === item.id
                ? 'bg-[#E9D5FF] text-[#5B21B6] shadow'
                : 'bg-[#F3F4F6] text-gray-700 hover:bg-[#E5E7EB]'
        ]">
            <span class="pl-3">{{ item.name }}</span>
        </button>


    </div>
</template>

<script setup>
import { watch } from 'vue';


defineProps({
    tabs: Array,
    selected: String
})
const emit = defineEmits(['update:selected'])


</script>