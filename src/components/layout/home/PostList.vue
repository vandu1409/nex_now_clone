<template>
    <div class="mt-12">
        <div class="mb-4">
            <h1 class="font-bold text-3xl uppercase text-gray-600">Tin tức & Sự kiện</h1>
        </div>
        <div >
            <swiper :slidesPerView="4" :spaceBetween="10" :freeMode="true" :loop="true" :modules="modules"
                :pagination="{ clickable: true }" :breakpoints="breakpoints" class="mySwiper">
                <swiper-slide v-for="business in 9" :key="business">
                    <Post :business="business" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import Post from '../../common/Post.vue';

</script>