<template>
    <div @click="triggerPicker"
        class="flex justify-between items-center  px-2 py-2 border-[1px] space-x-3 cursor-pointer rounded-lg">

        <i class="pi pi-calendar py-2 px-2 rounded-xl bg-gray-200 text-primary mr-2"></i>

        <div>
            <span class="font-semibold">
                {{ formatDate(dateRange[0]) }}
                <span class="mx-1">Đến</span>
                {{ formatDate(dateRange[1]) }}
            </span>
        </div>
        <div class="text-gray-300">|</div>
        <div class="flex items-center space-x-1 bg-purple-100 text-primary px-3 py-1 rounded-full text-sm">
            <i class="pi pi-moon"></i>
            <span>{{ calculateNights(dateRange[0], dateRange[1]) }} đêm</span>
        </div>

    </div>

    <div style="position: absolute; left: 0; bottom: 0; opacity: 0; pointer-events: none;">
        <DatePicker v-model="dateRange" selectionMode="range" :numberOfMonths="2" :manualInput="false" appendTo="body"
            inputId="hidden-datepicker" inputStyle="display: none" ref="datepickerRef">
            <template #footer>
                <div class="flex justify-center items-center py-2 px-2 mt-2 font-bold border-2">
                    <i class="pi pi-calendar mr-2"></i>
                    <span>
                        {{ formatDate(dateRange[0]) }}
                        <span class="mx-1">Đến</span>
                        {{ formatDate(dateRange[1]) }} |
                        {{ calculateNights(dateRange[0], dateRange[1]) }} Đêm
                    </span>
                </div>
                <div class="mt-2 p-2 w-full">
                    <button class="py-2 px-2 rounded-full bg-primary text-white w-full"  @click="closeDatepicker">
                        Xác nhận
                    </button>
                </div>
            </template>
        </DatePicker>
    </div>
</template>

<script setup>
import { DatePicker } from 'primevue'
import { ref, watch } from 'vue'

const datepickerRef = ref(null)
const today = new Date()
const sevenDaysLater = new Date()
sevenDaysLater.setDate(today.getDate() + 7)


const props = defineProps({
    booking_date: Date,
    booking_end_date: Date
})


const dateRange = ref([
  props.booking_date || today,
  props.booking_end_date || sevenDaysLater
]);

const emit = defineEmits(['update:booking_date', 'update:booking_end_date']);

watch(dateRange, ([start, end]) => {
    emit('update:booking_date', start)
    emit('update:booking_end_date', end)
})

// console.log('search_daily')

watch(() => props.booking_date, (newVal) => {
    dateRange.value[0] = newVal
}, { deep: true })

watch(() => props.booking_end_date, (newVal) => {
    dateRange.value[1] = newVal
}, { deep: true })

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
    const input = document.getElementById('hidden-datepicker');
    if (input) input.click();

};

function closeDatepicker() {
    if (datepickerRef.value) {
      datepickerRef.value.overlayVisible = false
    }
}


</script>