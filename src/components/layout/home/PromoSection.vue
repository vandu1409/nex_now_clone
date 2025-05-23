<template>
    <div class="flex flex-col items-center max-w-5xl mx-auto justify-center mt-20">
        <div class="w-full max-w-screen-xl px-4">
            <div class="w-full flex flex-col justify-center">
                <h1 class="font-bold uppercase text-3xl text-center mb-6">Phù hợp với bạn</h1>
                <TabSwitcher :tabs="tabs" :selected="selected" @update:selected="selected = $event"></TabSwitcher>
            </div>
            <div class="flex flex-wrap -mx-2 mt-6">
                <!-- Loading: show 4 skeletons -->
                <template v-if="isLoading">
                    <div v-for="n in 4" :key="n" class="w-full sm:w-1/2 px-2 mb-4">
                        <BusinessSkeleton />
                    </div>
                </template>

                <!-- Loaded: show real cards -->
                <template v-else>
                    <div v-for="item in businesses.slice(0, 4)" :key="item.id" class="w-full sm:w-1/2 px-2 mb-4">
                        <PromoCard :business="item" />
                    </div>

                    <!-- No data -->
                    <div v-if="businesses.length === 0" class="flex justify-center items-center h-96 w-full">
                        <div class="flex flex-col text-center">
                            <img src="https://nex-now.com/images/booking/not-found.svg" alt="" />
                            <span class="text-sm text-gray-400">Không có dữ liệu</span>
                        </div>
                    </div>
                </template>
            </div>

        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import TabSwitcher from '../../common/TabSwitcher.vue'
import PromoCard from './PromoCard.vue'
import { searchByType } from '../../../api/search';
import BusinessSkeleton from '../../common/BusinessSkeleton.vue';

const tabs = [
    {
        id: 'all',
        icon: 'pi-th-large',
        name: 'Tất cả'
    },
    {
        id: 'stay',
        icon: 'pi-building',
        name: 'Lưu trú'
    },
    {
        id: 'eat',
        icon: 'pi-face-smile',
        name: 'Ăn uống'
    },
    {
        id: 'beautify',
        icon: 'pi-heart-fill',
        name: 'Làm đẹp'
    },
    {
        id: 'travel',
        icon: 'pi-car',
        name: 'Du lịch'
    },
    {
        id: 'entertainment',
        icon: 'pi-shopping-bag',
        name: 'Giải trí'
    },
    {
        id: 'demo',
        icon: 'pi-info-circle',
        name: 'Khác'
    },
]

const selected = ref(tabs[0].id)
const businesses = ref([])
const isLoading = ref(false)

const fetchBusinesses = async () => {
    try {
        isLoading.value = true
        const response = await searchByType(selected.value)
        isLoading.value = false

        businesses.value = response.data
    } catch (err) {
        console.log(err)
    }
}

watch(selected, () => {
    fetchBusinesses()
})

onMounted(() => {
    fetchBusinesses()
})


</script>
