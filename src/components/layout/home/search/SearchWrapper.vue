<template>
  <div class="w-full p-4">
    <!-- Tabs -->
    <div class="flex flex-wrap gap-2">
      <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
        'py-2 px-10 font-semibold',
        activeTab === tab.id
          ? 'bg-white text-primary'
          : ' bg-[#00000042] text-white hover:bg-opacity-30'
      ]">
        <i :class="`pi ${tab.icon}`"></i>
        {{ tab.name }}
      </button>
    </div>
    <div class="bg-white">
      <div v-if="activeTab == 'stay'">
        <SearchStay :goToSearch="goToSearch"></SearchStay>
      </div>
      <div v-else-if="activeTab == 'beauty'">
        <SearchBeauty :goToSearch="goToSearch"></SearchBeauty>
      </div>
      <div v-else>
        <SearchCommon :goToSearch="goToSearch"></SearchCommon>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, provide } from 'vue'
import SearchStay from './SearchStay.vue'
import SearchBeauty from './SearchBeauty.vue'
import SearchCommon from './SearchCommon.vue'
import { useRouter } from 'vue-router'

const tabs = [
  { id: 'stay', name: 'Lưu trú', icon: 'pi-building', },
  { id: 'eat', name: 'Ăn uống', icon: 'pi-face-smile', },
  { id: 'beauty', name: 'Làm đẹp', icon: 'pi-heart-fill', },
  { id: 'travel', name: 'Du lịch', icon: 'pi-car', },
  { id: 'entertainment', name: 'Giải trí', icon: 'pi-shopping-bag', },
  { id: 'other', name: 'Khác', icon: 'pi-info-circle', }
]

const activeTab = ref('stay')
const router = useRouter()

const booking_date = ref()
const booking_end_date = ref()
const usage_quantity = ref(1)
const children_quantity = ref()
const room_quantity = ref()
const keySearch = ref()

const receiveBookingData = (data) => {
  if (data.bookingDate !== undefined) booking_date.value = data.bookingDate;
  if (data.bookingEndDate !== undefined) booking_end_date.value = data.bookingEndDate;
  if (data.usageQuantity !== undefined) usage_quantity.value = data.usageQuantity;
  if (data.childrenQuantity !== undefined) children_quantity.value = data.childrenQuantity;
  if (data.roomQuantity !== undefined) room_quantity.value = data.roomQuantity;
  if (data.keyword!= useRouter) keySearch.value = data.keyword
}

provide('sendBookingData', receiveBookingData)

const goToSearch = () => {
  router.push({
    path: '/search',
    query: {
      booking_date: booking_date.value,
      booking_end_date: booking_end_date.value,
      usage_quantity: usage_quantity.value,
      children_quantity: children_quantity.value,
      room_quantity: room_quantity.value,
      key_search:keySearch.value
    }
  })
}


</script>
