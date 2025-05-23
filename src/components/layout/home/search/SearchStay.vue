<template>
    <div class="relative text-black">
        <!-- start search -->
        <div class="w-full relative py-4">
            <i class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input v-model="search" type="text" placeholder="Tìm kiếm tên khách sạn"
                class="pl-10 w-full py-2 border-b-2 rounded-md outline-none" />
        </div>
        <!-- end search -->

        <!-- start dali tab -->
        <div class="flex space-x-2 mt-2 mb-2 px-4">
            <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
                'px-3 py-1 rounded-full text-sm font-medium',
                activeTab === tab.id ? 'bg-purple-200 text-purple-800' : 'bg-gray-100'
            ]">
                {{ tab.name }}
            </button>
        </div>

        <!--  -->
        <div class="flex flex-wrap justify-center px-4 py-2 items-center gap-4">

            <div class="">
                <!-- Tab content -->
                <div v-if="activeTab === 'daily'">
                    <SearchByDaily></SearchByDaily>
                </div>

                <div v-if="activeTab === 'overnight'">
                    <SearchOvernight></SearchOvernight>
                </div>

                <div v-if="activeTab === 'hourly'" class="relative">
                    <SearchByHour></SearchByHour>
                </div>
            </div>

            <!-- Room and people -->
            <div class="relative border-[1px] flex-grow w-full sm:w-auto sm:flex-grow">
                <div class="flex ">
                    <div @click="toggleGuest" class="flex w-1/3 items-center space-x-2 px-2 py-2">
                        <i class="pi pi-user py-2 px-2 rounded-xl bg-gray-200 text-purple-600 mr-2"></i>
                        <div>
                            <p class="text-sm">Số lượng phòng</p>
                            <span class="font-semibold">{{ room }} Phòng</span>
                        </div>
                    </div>

                    <div @click="toggleGuest" class="flex w-2/3 items-center space-x-2 px-2 py-2">
                        <!-- Icon + Nội dung gom chung lại -->
                        <div class="flex items-center space-x-2">
                            <i class="pi pi-user py-2 px-2 rounded-xl bg-gray-200 text-purple-600"></i>
                            <div>
                                <p class="text-sm">Số khách</p>
                                <span class="font-semibold">{{ adult }} người lớn - {{ child }} trẻ em</span>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- modal -->
                <div v-if="showGuest" class="absolute z-30 mt-2 bg-white p-4 shadow-lg rounded-xl w-80">
                    <div class="space-y-4">
                        <div v-for="item in guestOptions" :key="item.label" class="flex items-center justify-between">
                            <div>
                                <p class="text-sm font-medium text-gray-700">{{ item.label }}</p>
                                <p class="text-xs text-gray-500">{{ item.description }}</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <button @click="item.decrement"
                                    class="w-6 h-6 flex items-center justify-center border rounded-full hover:bg-purple-100">-</button>
                                <span class="w-4 text-center">{{ item.value }}</span>
                                <button @click="item.increment"
                                    class="w-6 h-6 flex items-center justify-center border rounded-full hover:bg-purple-100">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="text-right mt-4">
                        <button @click="toggleGuest"
                            class="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                            Xác nhận
                        </button>
                    </div>
                </div>

            </div>

            <div class="w-full sm:w-auto">
                <button @click="props.goToSearch" class="px-10 py-3 bg-primary rounded-full text-white">Tìm kiếm</button>
            </div>
        </div>
        <!--  -->

    </div>
</template>

<script setup>
import { ref, computed, nextTick, warn, watch, inject } from 'vue'
import { DatePicker } from 'primevue';
import '@/assets/datepicker.css'
import SearchByDaily from './search_stay/SearchByDaily.vue';
import SearchByHour from './search_stay/SearchByHour.vue';
import SearchOvernight from './search_stay/SearchOvernight.vue';

const showGuest = ref(false)
const toggleGuest = () => showGuest.value = !showGuest.value
const room = ref(1)
const adult = ref(1)
const child = ref(0)
const search = ref()
const activeTab = ref('daily')
const tabs = [
    { id: 'daily', name: 'Hằng ngày' },
    { id: 'overnight', name: 'Qua đêm' },
    { id: 'hourly', name: 'Theo giờ' }
]


const guestOptions = [
    {
        label: 'Số lượng phòng',
        description: '',
        value: room,
        increment: () => room.value++,
        decrement: () => { if (room.value > 1) room.value-- }
    },
    {
        label: 'Người lớn',
        description: 'Từ 18 tuổi trở lên',
        value: adult,
        increment: () => adult.value++,
        decrement: () => { if (adult.value > 1) adult.value-- }
    },
    {
        label: 'Trẻ em',
        description: 'Dưới 18 tuổi',
        value: child,
        increment: () => child.value++,
        decrement: () => { if (child.value > 0) child.value-- }
    }
]


const sendBookingData = inject('sendBookingData')
const props =  defineProps({
    goToSearch:Function
})

const hidePicker = () => {
    document.activeElement?.blur()
}

watch(room,(newVal)=>{
    if (sendBookingData) {
        sendBookingData({roomQuantity:newVal})
    }
})

watch(adult,(newVal)=>{
    if(sendBookingData) {
        sendBookingData({usageQuantity:newVal})
    }
})

watch(child,(newVal)=>{
    if(sendBookingData) {
        sendBookingData({childrenQuantity:newVal})
    }
})

watch(search,(newVal)=>{
    if(sendBookingData){
        sendBookingData({keyword:newVal})
    }
})

</script>
