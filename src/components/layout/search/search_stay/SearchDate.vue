<template>
    <div class="flex items-center border rounded-lg px-2 py-1 gap-4 max-w-lg w-full shadow-sm">
        <i class="pi pi-calendar px-2 py-2 rounded-xl bg-[#E8E9EC] mr-3"></i>

        <Calendar v-model="selectedDate" date-format="dd/mm/yy" placeholder="Chọn ngày" class="no-border"
            input-class="no-border-input" />

        <div class="text-gray-300">|</div>

        <i class="pi pi-clock px-2 py-2 rounded-xl bg-[#E8E9EC] mr-3"></i>

        <Calendar v-model="selectedTime" time-only placeholder="Chọn giờ" hour-format="24" class="w-[100px] no-border"
            input-class="no-border-input" />
    </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import Calendar from 'primevue/calendar'

const props = defineProps({
    booking_date: Date,
    booking_end_date: Date,
})

const emit = defineEmits(['update:booking_date', 'update:booking_end_date'])

const selectedDate = ref(props.booking_date ? new Date(props.booking_date) : null)
const selectedTime = ref(props.booking_date ? new Date(props.booking_date) : null)

function combineDateTime(date, time) {
  if (!date || !time || !(time instanceof Date)) return null
  const d = new Date(date)
  d.setHours(time.getHours(), time.getMinutes(), 0, 0)
  return d
}

watch(() => props.booking_date, (val) => {
    if (val) {
        selectedDate.value = new Date(val)
        selectedTime.value = new Date(val)
    } else {
        selectedDate.value = null
        selectedTime.value = null
    }
})

watch([selectedDate, selectedTime], ([date, time]) => {
    const combined = combineDateTime(date, time)
    if (
        combined &&
        (!props.booking_date || combined.getTime() !== new Date(props.booking_date).getTime())
    ) {
        emit('update:booking_date', combined)

        const end = new Date(combined.getTime() + 2 * 60 * 60 * 1000)
        emit('update:booking_end_date', end)
    }
})
</script>


<style>
.no-border .p-inputtext {
    border: none !important;
    box-shadow: none !important;
}

.no-border-input {
    border: none !important;
    box-shadow: none !important;
}

.no-border .p-inputtext:focus {
    box-shadow: none !important;
}
</style>
