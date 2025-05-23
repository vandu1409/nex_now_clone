<template>
    <!-- Custom div để mở popup -->
    <div @click="triggerPicker"
        class="flex justify-between items-center  px-2 py-2 border-[1px] space-x-3 cursor-pointer">

        <i class="pi pi-calendar py-2 px-2 rounded-xl bg-gray-200 text-purple-600 mr-2"></i>

        <div>
            <p class="text-sm">Ngày</p>
            <span class="font-semibold">
                {{ formatDate(overnightRange[0]) }}
                <span class="mx-1">Đến</span>
                {{ formatDate(overnightRange[1]) }}
            </span>
        </div>
        <div class="text-gray-300">|</div>
        <div class="flex items-center space-x-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            <i class="pi pi-moon"></i>
            <span>{{ calculateNights(overnightRange[0], overnightRange[1]) }} đêm</span>
        </div>

    </div>
    <div style="position: absolute; left: 0; top: 100; opacity: 0; pointer-events: none;">
         <DatePicker v-model="overnightRange" selectionMode="range" :manualInput="false"
            inputId="hidden-datepicker-overnight" inputStyle="display: none" style="width: 400px !important;">
            <template #footer>
                <div class="flex justify-center items-center py-2 px-2 mt-2 font-bold border-2">
                    <i class="pi pi-calendar mr-2"></i>
                    <span>
                        {{ formatDate(overnightRange[0]) }}
                        <span class="mx-1">Đến</span>
                        {{ formatDate(overnightRange[1]) }} |
                        {{ calculateNights(overnightRange[0], overnightRange[1]) }} Đêm
                    </span>
                </div>
                <div class="mt-2 p-2 w-full">
                    <button class="py-2 px-2 rounded-full bg-[#5F1F76] text-white w-full"
                        @click="datepickerRef?.hide()">
                        Xác nhận
                    </button>
                </div>
            </template>
        </DatePicker>
    </div>
</template>

<script setup>
import { DatePicker } from 'primevue'
import { ref } from 'vue'


const today = new Date()
const sevenDaysLater = new Date()
sevenDaysLater.setDate(today.getDate() + 1)

const overnightRange = ref([today, sevenDaysLater])

function formatDate(date) {
    if (!date) return ''
    const d = new Date(date)
    const day = d.getDate().toString().padStart(2, '0')
    const month = (d.getMonth() + 1).toString().padStart(2, '0')
    const year = d.getFullYear()
    return `${day}/${month}/${year}`
}

function calculateNights(start, end) {
    if (!start || !end) return 0
    const diffMs = end.getTime() - start.getTime()
    return Math.floor(diffMs / (1000 * 60 * 60 * 24))
}


const triggerPicker = async () => {
    const input = document.getElementById('hidden-datepicker-overnight');
    if (input) input.click();

};
</script>
