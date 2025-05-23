<template>
    <div class="px-4 rounded-lg border-[1px] relative ">
        <div @click="triggerPicker" class="flex justify-between items-center  px-2 py-2 space-x-3 cursor-pointer">
            <i class="pi pi-calendar py-2 px-2 rounded-xl bg-gray-200 text-primary mr-2"></i>

            <div>
                <span class="font-semibold">
                    <span class="mr-5">{{ formatDate(date) }} - {{ activeTimeCheckin }} </span><i
                        class="pi pi-hourglass text-primary mr-2"></i> {{
                            activeTimeStay }}
                </span>
            </div>

        </div>
        <div class="absolute">
            <DatePicker style="position: absolute; left: 0; bottom: 0; opacity: 0; pointer-events: none;" v-model="date"
                appendTo="body" inputId="hidden-datepicker-by-hour">
                <template #footer>
                    <div class="flex flex-col gap-3">
                        <h1 class="text-gray-500">Thời gian check-in</h1>
                        <div class="space-x-2 text-sm">
                            <label v-for="(item, index) in checkInTimeList" @click="activeTimeCheckin = item"
                                :key="index" :class="[
                                    'py-1 px-4 rounded-3xl border',
                                    activeTimeCheckin === item ? 'bg-[#F4E5FF]' : 'bg-white'

                                ]">
                                {{ item }}
                            </label>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3 mt-2">
                        <h1 class="text-gray-500">Thời gian ở lại</h1>
                        <div class="space-x-2 text-sm">
                            <label v-for="(item, index) in stayTimeList" @click="activeTimeStay = item" :key="index"
                                :class="[
                                    'py-1 px-3 rounded-3xl border',
                                    activeTimeStay === item ? 'bg-[#F4E5FF]' : 'bg-white'

                                ]">
                                {{ item }} giờ
                            </label>
                        </div>
                    </div>
                    <div class="mt-5 w-full px-2 border py-2 text-sm">
                        <div class="flex flex-row justify-center items-center">
                            <i class="pi pi-calendar py-1 px-2 rounded-xl bg-gray-200 text-primary mr-2"></i>
                            <div>
                                <span class="font-semibold">
                                    {{ formatDate(date) }} - {{ activeTimeCheckin }} <i
                                        class="pi pi-hourglass text-primary"></i> {{ activeTimeStay }}
                                </span>
                            </div>

                        </div>
                    </div>

                    <div class="py-4 w-full">
                        <button @click="confirmDate" class="px-6 py-2 w-full rounded-full bg-primary text-white">Xác nhận</button>
                    </div>
                </template>
            </DatePicker>
        </div>
    </div>
</template>

<script setup>
import { DatePicker } from 'primevue';
import { computed, ref, watch } from 'vue';

const checkIn = ref()
const stayPeriod = ref()
const date = ref(new Date())
const activeTimeCheckin = ref('0:30')
const activeTimeStay = ref(1)
const checkInTimeList = [
    "0:30",
    "1:00",
    "1:30",
    "2:00"
]
const stayTimeList = [1, 2, 3, 4]

const props = ({
    booking_date: Date,
    booking_end_date: Date
})

const emit = defineEmits(['update:booking_date','update:booking_end_date'])

function toMinutes(str) {
  const [h, m] = str.split(':').map(Number);
  return h * 60 + (m || 0);
}
function makeDateWithMinutes(date, minutes) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);  
  d.setMinutes(minutes);
  return d;
}

const bookingCheckIn = computed(() => {
  if (!date.value || !activeTimeCheckin.value) return null;
  return makeDateWithMinutes(date.value, toMinutes(activeTimeCheckin.value));
});

const bookingEndDate = computed(() => {
  if (!bookingCheckIn.value || !activeTimeStay.value) return null;
  return new Date(bookingCheckIn.value.getTime() + activeTimeStay.value * 60 * 60 * 1000);
});

watch(bookingCheckIn,(newVal)=>{
    console.log('Date check in',newVal)
    console.log('ISO:', newVal.toISOString()); 
    emit('update:booking_date',newVal)
})

watch(bookingEndDate,(newVal)=>{
    console.log('Date check_out',newVal)
    console.log('ISO:', newVal.toISOString()); 
    emit('update:booking_end_date',newVal)
})

function formatDate(date) {
    if (!date) return ''
    const d = new Date(date)
    const day = d.getDate().toString().padStart(2, '0')
    const month = (d.getMonth() + 1).toString().padStart(2, '0')
    const year = d.getFullYear()
    return `${day}/${month}/${year}`
}

const triggerPicker = async () => {
    const input = document.getElementById('hidden-datepicker-by-hour');
    if (input) input.click();

};
</script>