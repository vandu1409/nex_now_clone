<script setup>
import Calendar from 'primevue/calendar'
import { ref } from 'vue'

const selectedDate = ref(new Date())
const selectedTime = ref('15:00')
</script>

<template>
    <div class="flex items-center border rounded-lg px-2 py-1 gap-4 max-w-lg w-full shadow-sm">
        <!-- Icon Lịch -->
        <i class="pi pi-calendar px-2 py-2 rounded-xl bg-[#E8E9EC] mr-3"></i>

        <!-- Date Picker -->
        <Calendar v-model="selectedDate" date-format="dd/mm/yy" placeholder="Chọn ngày"
            class="no-border" input-class="no-border-input" />

        <!-- Divider -->
        <div class="text-gray-300">|</div>

        <!-- Icon Đồng hồ -->
        <i class="pi pi-clock px-2 py-2 rounded-xl bg-[#E8E9EC] mr-3"></i>

        <!-- Time Picker -->
        <Calendar v-model="selectedTime" time-only placeholder="Chọn giờ" hour-format="24" class="w-[100px] no-border"
            input-class="no-border-input" />
    </div>
</template>

<script>

</script>

<style>
/* Xoá border xung quanh calendar input */
.no-border .p-inputtext {
    border: none !important;
    box-shadow: none !important;
}

/* Xoá border của chính input nếu dùng input-class */
.no-border-input {
    border: none !important;
    box-shadow: none !important;
}

/* Xoá background hover nếu muốn */
.no-border .p-inputtext:focus {
    box-shadow: none !important;
}
</style>
