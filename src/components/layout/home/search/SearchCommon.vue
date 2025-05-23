<template>
    <div class="w-full relative py-4">
        <i class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        <input v-model="search" type="text" placeholder="Tìm kiếm"
            class="pl-10 w-full py-2 border-b-2 rounded-md outline-none text-black" />
    </div>

    <div class="flex items-center px-4 gap-3">
        <div class="relative border flex justify-center items-center gap-4 px-4" @click="triggerPicker">
            <div class="flex items-center px-2 py-3">
                <i class="pi pi-calendar px-2 py-2 rounded-xl bg-[#E8E9EC] mr-3"></i>
                <div>
                    <label class="block text-sm font-medium text-gray-600 mb-1">Ngày</label>
                    <!-- <span>{{ dateDisplay }}</span> -->

                    <span class="font-semibold text-black">
                        {{ formatDate(dates[0]) }}
                        <span class="mx-1">Đến</span>
                        {{ formatDate(dates[1]) }}
                    </span>

                    <DatePicker 
                    style="position: absolute; left: 0; top: 100; opacity: 0; pointer-events: none;"
                    v-model="dates" selectionMode="range" :manualInput="true" inputId="hidden-datepicker-common" />

                </div>
            </div>
            <div class="text-gray-300">|</div>
            <div class="flex items-center space-x-1  bg-purple-100 text-purple-700 px-3 rounded-full text-sm">
                <i class="pi pi-moon"></i>
                <span>{{ calculateNights(dates[0], dates[1]) }} đêm</span>
            </div>
        </div>

        <div class="relative border flex flex-grow items-center gap-4 text-black">
            <div class="flex items-center px-2 py-2 bg-white">
                <i class="pi pi-calendar px-2 py-2 rounded-xl bg-[#E8E9EC] mr-3"></i>
                <div>
                    <label class="block text-sm font-medium text-gray-600 mb-1">Số khách</label>
                    <div class="">
                        <button v-for="n in 6" :key="n" @click="selected = n" :class="[
                            'px-6 py-1 rounded-2xl border mr-2',
                            selected === n ? 'bg-[#F9F1FF]' : 'bg-white'
                        ]">
                            {{ n }}
                        </button>
                        <input v-model="selected" type="number" class="border w-32 rounded-xl px-4 py-1 focus:outline-none"
                            placeholder="Tùy chỉnh">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <button @click="props.goToSearch" class="bg-primary px-10 py-3 rounded-3xl text-white">Tìm kiếm</button>
        </div>
    </div>
</template>

<script setup>
import { DatePicker } from 'primevue';
import { inject, ref, watch } from 'vue';


const selected = ref()
const search = ref()

const today = new Date()
const sevenDaysLater = new Date()
sevenDaysLater.setDate(today.getDate() + 7)

const dates = ref([today, sevenDaysLater])

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
    const input = document.getElementById('hidden-datepicker-common');
    if (input) input.click();

};

const sendBookingData = inject('sendBookingData')
const props = defineProps({
    goToSearch:Function
})

watch(() => dates.value, (newVal) => {
  if (sendBookingData && newVal && newVal.length === 2) {
    sendBookingData({
      bookingDate: newVal[0],
      bookingEndDate: newVal[1]
    })
  }
}, { immediate: true })


watch(search,(newVal)=>{
    if(sendBookingData){
        sendBookingData({keyword:newVal})
    }
})

watch(selected,(newVal)=>{
     if(sendBookingData){
        sendBookingData({usageQuantity:newVal})
    }
})

</script>