<template>
    <div class="">
        <div>
            <h1 class="font-bold uppercase text-3xl m-4">{{ title }}</h1>
            <div class="px-4">
                <TabSwitcher :tabs="tabs" :selected="selected" @update:selected="selected = $event"></TabSwitcher>
            </div>
        </div>

        <div v-if="!isLoading">
            <swiper :slidesPerView="4" :spaceBetween="10" :freeMode="true" :loop="true" :modules="modules"
                :pagination="{ clickable: true }" :breakpoints="breakpoints" class="mySwiper">
                <swiper-slide v-for="business in businesses" :key="business.id">
                    <Card :business="business" :isLoading="isLoading" />
                </swiper-slide>
            </swiper>

        </div>
        <div class="mt-5 mb-5 ml-5" v-else>
           <swiper :slidesPerView="4" :spaceBetween="10" :freeMode="true" :loop="true" :modules="modules"
                :pagination="{ clickable: true }" :breakpoints="breakpoints" class="mySwiper">
                <swiper-slide v-for="i in 4" :key="i">
                    <Skeleton></Skeleton>
                </swiper-slide>
            </swiper>
        </div>
        <div v-if="businesses.length == 0" class="flex justify-center items-center h-96">
            <div class="flex flex-col text-center">
                <img src="https://nex-now.com/images/booking/not-found.svg" alt="">
                <span class="text-sm text-gray-400">Không có dữ liệu</span>
            </div>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import TabSwitcher from '../../common/TabSwitcher.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Card from './Card.vue';
import { searchByType } from '../../../api/search';
import Skeleton from '../../common/Skeleton.vue';
// import { useLoadingStore } from '../../../store/loading';

const tabs = [
    {
        id:'all',
        icon: 'pi-th-large',
        name: 'Tất cả'
    },
    {   
        id:'stay',
        icon: 'pi-building',
        name: 'Lưu trú'
    },
    {
        id:'eat',
        icon: 'pi-face-smile',
        name: 'Ăn uống'
    },
    {
        id:'beautify',
        icon: 'pi-heart-fill',
        name: 'Làm đẹp'
    },
    {
        id:'travel',
        icon: 'pi-car',
        name: 'Du lịch'
    },
    {
        id:'entertainment',
        icon: 'pi-shopping-bag',
        name: 'Giải trí'
    }, 
    {
        id:'demo',
        icon: 'pi-info-circle',
        name: 'Khác'
    },
]

const breakpoints = {
    // màn hình nhỏ: 1 slide
    0: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    // tablet: 2 slides
    640: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    // laptop: 3 slides
    768: {
        slidesPerView: 3,
        spaceBetween: 10,
    },
    // desktop: 4 slides
    1024: {
        slidesPerView: 4,
        spaceBetween: 10,
    },
}


const selected = ref(tabs[0].id)
const businesses = ref([])
const isLoading = ref(false)

const fetchBusinesses = async() => {
    try{  
        isLoading.value = true
        const response = await searchByType(selected.value)
        isLoading.value = false
        businesses.value = response.data
    }catch(err){
        console.log(err)
    }
}

const props = defineProps({
    title: {
        type: String,
        default: 'Booking phổ biến nhất',
    },
});

watch(selected,()=>{
    fetchBusinesses()
})

onMounted( ()=>{
    fetchBusinesses()
})

</script>