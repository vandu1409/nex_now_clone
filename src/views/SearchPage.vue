<template>
    <Header></Header>
    <div class="mt-24 md:px-24">
        <!-- Phần tab (trên) -->
        <div class="px-4">
            <div class="flex flex-wrap border-[0.5px] overflow-hidden">
                <button v-for="tab in tabs" :key="tab.name" @click="selected = tab.name" :class="[
                    'flex items-center justify-center gap-2 py-3 text-sm border-0 border-y',
                    'w-1/2 sm:w-1/3 md:flex-1',
                    selected === tab.name
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                ]">
                    <i :class="tab.icon" class="text-lg"></i>
                    <span>{{ tab.label }}</span>
                </button>
            </div>
        </div>

        <!-- start dali tab -->
        <div class="flex space-x-2 mt-4 mb-4 px-4" v-if="selected == 'stay'">
            <button v-for="tab in rentalTypes" :key="tab.id" @click="activeRentalTypes = tab.id" :class="[
                'px-3 py-2 rounded-full text-sm border-[0.5px]',
                activeRentalTypes === tab.id ? 'bg-purple-200 text-primary' : 'bg-gray-100'
            ]">
                {{ tab.name }}
            </button>
        </div>

        <!-- Phần tìm kiếm (dưới) -->
        <div class="w-full px-4 mt-4">
            <div class="flex flex-wrap gap-3 items-stretch">

                <div class="flex flex-grow">
                    <SearchByCity v-model="city_id" />
                </div>

                <div class="">
                    <div  v-if="selected == 'stay'">
                        <div class="relative" v-if="activeRentalTypes == 'daily' || activeRentalTypes == 'overnight'">
                            <SearchDaily v-model:booking_date="booking_date"
                                v-model:booking_end_date="booking_end_date">
                            </SearchDaily>
                        </div>
                        <div class="relative" v-else-if="activeRentalTypes == 'hourly'">
                            <SearchByHour v-model:booking_date="booking_date"
                                v-model:booking_end_date="booking_end_date"></SearchByHour>
                        </div>
                    </div>

                    <div v-else>
                        <SearchDate />
                    </div>

                </div>

                <div>
                    <SearchRoom v-model:usage_quantity="usage_quantity" v-model:children_quantity="children_quantity"
                        v-model:room_quantity="room_quantity" />
                </div>

                <div>
                    <button @click="fetchBusinesses"
                        class="bg-primary text-white rounded-3xl px-6 py-3 whitespace-nowrap w-full sm:w-auto">
                        Tìm kiếm
                    </button>
                </div>
            </div>
        </div>

        <RestaurantList v-model:sort="sort" v-model:star="star" v-model:priceRange="priceRange" :listBusiness="listBusiness">
        </RestaurantList>
    </div>

</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import SearchRoom from '../components/features/SearchRoom.vue'
import SearchByCity from '../components/features/SearchByCity.vue'
import RestaurantList from '../components/layout/search/RestaurantList.vue'
import SearchDate from '../components/layout/search/search_stay/SearchDate.vue'
import Header from '../components/common/Header.vue'
import SearchDaily from '../components/layout/search/search_stay/SearchDaily.vue'
import SearchByHour from '../components/layout/search/search_stay/SearchByHour.vue'
import { searchBusinesses } from '../api/search'
import { useLoadingStore } from '../store/loading'
import { useRoute, useRouter } from 'vue-router'


const tabs = [
    { name: 'stay', label: 'Lưu trú', icon: 'pi pi-building' },
    { name: 'eat', label: 'Ăn uống', icon: 'pi pi-palette' },
    { name: 'beautify', label: 'Làm đẹp', icon: 'pi pi-warehouse' },
    { name: 'travel', label: 'Du lịch', icon: 'pi pi-car' },
    { name: 'entertainment', label: 'Giải trí', icon: 'pi pi-headphones' },
    { name: 'other', label: 'Khác', icon: 'pi pi-shopping-bag' }
]

const rentalTypes = [
    { id: 'daily', name: 'Hằng ngày' },
    { id: 'overnight', name: 'Qua đêm' },
    { id: 'hourly', name: 'Theo giờ' }
]


const route = useRoute()
const router = useRouter()

// const loadingStore = useLoadingStore()

const selected = ref(route.query.type || 'stay')
const activeRentalTypes = ref(route.query.rental_type || 'daily')
const city_id = ref(route.query.city_id || '')
const booking_date = ref(route.query.booking_date ? new Date(route.query.booking_date) : new Date())
const booking_end_date = ref(route.query.booking_end_date ? new Date(route.query.booking_end_date) : new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000))
const usage_quantity = ref(Number(route.query.usage_quantity) || 1)
const children_quantity = ref(Number(route.query.children_quantity) || 0)
const room_quantity = ref(Number(route.query.room_quantity) || 1)
const priceRange = ref([
    Number(route.query.price_from) || 0,
    Number(route.query.price_to) || 5000000
])
const star = ref(route.query.star ? route.query.star.split(',').map(Number) : [])
const keySearch = ref(route.query.key_search||'')
const sort = ref(route.query.sort_by||'')

const listBusiness = ref([])
const loadingStore = useLoadingStore()

function formatToLocalString(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  if (isNaN(date.getTime())) {
    console.error('Giá trị không phải ngày hợp lệ:', date)
    return null; 
  }

  return date.getFullYear() + '-' +
    String(date.getMonth() + 1).padStart(2, '0') + '-' +
    String(date.getDate()).padStart(2, '0') + ' ' +
    String(date.getHours()).padStart(2, '0') + ':' +
    String(date.getMinutes()).padStart(2, '0') + ':00';
}


const fetchBusinesses = async () => {
    try {

        const params = {
            city_id: city_id.value,
            booking_date: formatToLocalString(booking_date.value),
            booking_end_date: formatToLocalString(booking_end_date.value),
            usage_quantity: usage_quantity.value,
            children_quantity: children_quantity.value,
            room_quantity: room_quantity.value,
            price_from: priceRange.value[0],
            price_to: priceRange.value[1],
            type: selected.value,
            star: star.value,
            key_search:keySearch.value,
            sort_by:sort.value

        }

        loadingStore.start()
        const response = await searchBusinesses(params)
        loadingStore.stop()

        listBusiness.value = response.data.data
    } catch (error) {
        console.error('Lỗi khi gọi API tìm kiếm:', error)
    }
}


watch(
    [
        selected,
        city_id,
        booking_date,
        booking_end_date,
        usage_quantity,
        children_quantity,
        room_quantity,
        priceRange,
        star,
        sort
    ],
    () => {
        router.replace({
            query: {
                type: selected.value,
                city_id: city_id.value,
                booking_date: booking_date.value,
                booking_end_date: booking_end_date.value,
                usage_quantity: usage_quantity.value,
                children_quantity: children_quantity.value,
                room_quantity: room_quantity.value,
                price_from: priceRange.value[0],
                price_to: priceRange.value[1],
                star: star.value.join(','),
                sort_by:sort.value
            }
        })
        // fetchBusinesses()
    },
    { deep: true }
)

watch([selected,sort],(newVal)=>{
    fetchBusinesses()
})

onMounted(() => {
  fetchBusinesses()
})
</script>
<style scoped>
.header {
    background: white;
    color: black;
}
</style>