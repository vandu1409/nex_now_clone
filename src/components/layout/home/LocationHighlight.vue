<template>
    <div class="px-6">
        <div class="w-full">
            <h1 class="text-4xl uppercase font-bold">Điểm đến du lịch</h1>
        </div>
        <div class="mx-auto max-w-full overflow-x-hidden mt-4">
            <swiper :slides-per-view="auto" :space-between="5" :modules="modules" :centered-slides="false"
                :loop="true" :watch-overflow="true" :breakpoints="{
                    0: { slidesPerView: 1.5, spaceBetween: 10 },
                    640: { slidesPerView: 2.5, spaceBetween: 200 },
                    768: { slidesPerView: 3.5, spaceBetween: 200 },
                    1024: { slidesPerView: 5, spaceBetween: 5 }
                }" class="mySwiper">
                <swiper-slide v-for="(item, index) in locationImages" :key="index" class=" flex-shrink-0">
                    <div class="p-1">
                        <div class="rounded-xl w-full aspect-[3/5] relative overflow-hidden shadow-lg" :style="{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }">
                            <div class="absolute left-0 bottom-5 text-white font-bold text-xl w-full">
                                <h1 class="ml-2 uppercase">{{ item.name }}</h1>
                                <hr class="border-gray-100 my-1 border-[1px]" />
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import 'swiper/css'

const locationImages = ref([
    {
        image: 'https://res.cloudinary.com/nifehub-production/image/upload/w_500/public/66c/979/f59/66c979f59c755394967384.jpg',
        name: 'Hồ chí minh'
    },
    {
        image: 'https://res.cloudinary.com/nifehub-production/image/upload/w_500/public/66c/979/131/66c979131aef4022754848.jpeg',
        name: 'Bà rịa vũng tàu'
    },
    {
        image: 'https://res.cloudinary.com/nifehub-production/image/upload/w_500/public/66c/978/125/66c978125d239916948716.jpg',
        name: 'Hà giang'
    },
    {
        image: 'https://res.cloudinary.com/nifehub-production/image/upload/w_500/public/66c/977/478/66c977478a238434753054.jpg',
        name: 'Bình thuận'
    },
    {
        image: 'https://res.cloudinary.com/nifehub-production/image/upload/w_500/public/66c/976/88c/66c97688c102e780643077.jpg',
        name: 'Hà nội'
    }
])
</script>
