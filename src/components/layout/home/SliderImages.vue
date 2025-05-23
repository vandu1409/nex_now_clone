<template>
    <div class="px-4">
        <div class="">
            <swiper :spaceBetween="30" :pagination="{
                clickable: true,
            }" :modules="modules" class="mySwiper">
                <swiper-slide v-for="image in images"><img :src="image" alt=""></swiper-slide>

            </swiper>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const images = [
    "https://res.cloudinary.com/nifehub-production/image/upload/w_1920/public/675/f9b/cab/675f9bcabca84949598541.jpg",
    "https://res.cloudinary.com/nifehub-production/image/upload/w_1920/public/675/f9c/55e/675f9c55e7444739854596.jpg",
    "https://res.cloudinary.com/nifehub-production/image/upload/w_1920/public/675/f9c/989/675f9c9890d30645979930.jpg",
    "https://res.cloudinary.com/nifehub-production/image/upload/w_1920/public/675/f9d/510/675f9d5108c9f000210949.jpg",
    "https://res.cloudinary.com/nifehub-production/image/upload/w_1920/public/675/f9d/a01/675f9da011fb3294476515.png",
    "https://res.cloudinary.com/nifehub-production/image/upload/w_1920/public/675/f9e/1b7/675f9e1b7f007457660167.png",
    "https://res.cloudinary.com/nifehub-production/image/upload/w_1920/public/675/f9e/683/675f9e683ef30125035675.png",
    "https://res.cloudinary.com/nifehub-production/image/upload/w_1920/public/675/f9e/683/675f9e683ef30125035675.png",
    "https://res.cloudinary.com/nifehub-production/image/upload/w_1920/public/675/f9e/683/675f9e683ef30125035675.png"
];

const modules = [Pagination];
</script>


<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>