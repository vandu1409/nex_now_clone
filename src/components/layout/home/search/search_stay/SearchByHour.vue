<template>
    <div class="px-4 py-2 border-[1px] ">
        <div @click="triggerPicker" class="flex justify-between items-center space-x-3 cursor-pointer">
            <i class="pi pi-calendar py-2 px-2 rounded-xl bg-gray-200 text-purple-600 mr-2"></i>

            <div>
                <p class="text-sm">Ngày</p>
                <span class="font-semibold">

                    {{ formatDate(date) }} - {{ activeTimeCheckin }}
                </span>
            </div>

            <div class="text-gray-300">|</div>
            <div class="flex items-center space-x-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                <i class="pi pi-hourglass text-purple-600 mr-2"></i> 
                {{activeTimeStay }} giờ

            </div>

        </div>
        <div>
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
                            <i class="pi pi-calendar py-1 px-2 rounded-xl bg-gray-200 text-purple-600 mr-2"></i>
                            <div>
                                <span class="font-semibold">
                                    {{ formatDate(date) }} - {{ activeTimeCheckin }} <i
                                        class="pi pi-hourglass text-purple-600"></i> {{ activeTimeStay }}
                                </span>
                            </div>

                        </div>
                    </div>

                    <div class="py-4 w-full">
                        <button class="px-6 py-2 w-full rounded-full bg-[#581C87] text-white">Xác nhận</button>
                    </div>
                </template>
            </DatePicker>
        </div>
    </div>
</template>

<script setup>
import { DatePicker } from 'primevue';
import { ref } from 'vue';

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