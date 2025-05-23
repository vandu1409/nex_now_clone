<template>
    <div class="relative max-w-6xl mx-auto">
        <swiper effect="coverflow" :grabCursor="false" :centeredSlides="true" :initialSlide="3" :speed="600"
        :preventClicks="true" :modules="modules" slides-per-view="auto" :spaceBetween="50" :coverflowEffect="{
            rotate: 0,
            stretch: 80,
            depth: 350,
            modifier: 1,
            slideShadows: true
        }" @swiper="onSwiper" @slideChange="onSlideChange" 
        :navigation="{
             nextEl: '.custom-next',
             prevEl: '.custom-prev',
        }"
        :loopAdditionalSlides="0"
        :loop="true"
        >
        <swiper-slide v-for="(item, index) in slides" :key="index"
            class="w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg relative">
            <img :src="item.img" :alt="item.title" class="w-full h-full object-cover" />
            <div class="absolute bottom-0 left-0 right-0 text-white p-4 text-center">
                <h3 class="text-lg font-semibold mb-1">{{ item.title }}</h3>
                <div class="flex justify-center gap-1 mb-2">
                    <i v-for="n in 5" :key="n" class="pi pi-star text-yellow-400"></i>
                </div>
                <hr class="border-white/30 mb-2" />
                <div class="text-sm flex justify-center items-center gap-2">
                    <span><i class="fas fa-map-marker-alt"></i> {{ item.location }}</span>
                    <span>•</span>
                    <span>{{ item.reviews }} reviews</span>
                </div>
            </div>
        </swiper-slide>

        <div class="custom-prev">
           <i class="pi pi-arrow-left"></i>
        </div>
        <div class="custom-next">
            <i class="pi pi-arrow-right"></i>
        </div>
    </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
// import '@/assets/slider.css';

import { nextTick, onMounted, ref } from 'vue';

const slides = ref([
    {
        title: 'New Wave Resort Vũng Tàu 1',
        img: 'https://res.cloudinary.com/nifehub-production/image/upload/public/67e/520/d8e/67e520d8e8452854348283.jpg',
        location: 'Tỉnh Bà Rịa - Vũng Tàu',
        reviews: 1,
    },
    {
        title: 'New Wave Resort Vũng Tàu 2',
        img: 'https://res.cloudinary.com/nifehub-production/image/upload/public/67e/520/d8e/67e520d8e8452854348283.jpg',
        location: 'Tỉnh Bà Rịa - Vũng Tàu',
        reviews: 1,
    },
    {
        title: 'Khách sạn The Light 3',
        img: 'https://res.cloudinary.com/nifehub-production/image/upload/public/67e/3d8/198/67e3d8198af35184396330.png',
        location: 'TP. Hồ Chí Minh',
        reviews: 8,
    },
    {
        title: 'Golden Lotus Spa 4',
        img: 'https://res.cloudinary.com/nifehub-production/image/upload/public/67d/a32/b58/67da32b581ad8645588608.png',
        location: 'Hà Nội',
        reviews: 25,
    },
    {
        title: 'Fusion Resort Phú Quốc 5',
        img: 'https://res.cloudinary.com/nifehub-production/image/upload/public/67d/a32/b58/67da32b581ad8645588608.png',
        location: 'Phú Quốc',
        reviews: 18,
    },
    {
        title: 'Fusion Resort Phú Quốc 6',
        img: 'https://res.cloudinary.com/nifehub-production/image/upload/public/67d/a32/b58/67da32b581ad8645588608.png',
        location: 'Phú Quốc',
        reviews: 18,
    },
    {
        title: 'Fusion Resort Phú Quốc 7',
        img: 'https://res.cloudinary.com/nifehub-production/image/upload/public/67d/a32/b58/67da32b581ad8645588608.png',
        location: 'Phú Quốc',
        reviews: 18,
    },
]);

let swiperInstance = ref(null);

const onSwiper = (swiper) => {
    swiperInstance = swiper;
    nextTick(() => {
    swiper.slideToLoop(3, 0, false); // realIndex 3 = slide thứ 4
  });
};

const onSlideChange = () => {
//     console.log('Active slide index (clone included):', swiperInstance.activeIndex);
//   console.log('Real slide index (gốc):', swiperInstance.realIndex);
    // swiperInstance.activeIndex = swiperInstance.realIndex
};

const goToSlide = (index) => {
    if (swiperInstance) {
        swiperInstance.slideTo(index);
    }
};

const modules = [EffectCoverflow, Pagination, Navigation, Scrollbar, A11y];

</script>
<style scoped>
.custom-prev,
.custom-next {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}
.custom-prev {
  left: 4px;
}
.custom-next {
  right: 4px;
}
</style>
