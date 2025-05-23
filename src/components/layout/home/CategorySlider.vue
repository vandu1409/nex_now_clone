<template>
    <div class="bg-[#F6F7F8] px-4 py-4 relative rounded-t-[40px] overflow-hidden">

         <div class="absolute top-0 left-0 w-full h-[12px] bg-gradient-to-r from-[#e8d7c4] via-[#e6cfae] to-[#d4aa58] z-10 rounded-t-[40px]"></div>

        <div class="w-full flex flex-col justify-center items-center">
            <div><p class="text-lg font-semibold mb-2">Đối tác</p></div>
            <div class="flex flex-row">
                <h1 class="font-bold uppercase text-4xl mr-3">Độc quyền tại</h1> 
                <img src="https://nex-now.com/images/common/logo.png" width="50px" height="50px" alt="">
            </div>
        </div>
        <div v-if="listBusiness.length" class="relative w-full flex justify-center items-center">
            <swiper effect="coverflow" :grabCursor="false" :centeredSlides="true" :initialSlide="2" :speed="600"
                :preventClicks="true" :modules="modules" slides-per-view="auto" :spaceBetween="0" :coverflowEffect="{
                    rotate: 0,
                    stretch: 100,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false
                }" @swiper="onSwiper" @slideChange="onSlideChange" :loopAdditionalSlides="0" :loop="true">
                <swiper-slide v-for="item in listBusiness" :key="item.id">
                    <div class="w-[540px] h-[360px] rounded-xl overflow-hidden shadow-lg relative">
                        <img :src="item?.featured_image?.file_path" :alt="item.name" class="w-full h-full object-cover" />
                        <div
                            class="absolute bottom-0 left-0 right-0 text-white p-4 text-center bg-gradient-to-t from-black/60 to-transparent">
                            <h3 class="text-lg font-semibold mb-1">{{ item.name }}</h3>
                            <div class="flex justify-center gap-1 mb-2">
                                <i v-for="n in 5" :key="n" class="pi pi-star text-yellow-400"></i>
                            </div>
                            <hr class="border-white/30 mb-2" />
                            <div class="text-sm flex justify-center items-center gap-2">
                                <span><i class="fas fa-map-marker-alt"></i> {{ item.address }}</span>
                                <span>•</span>
                                <span>{{ item.review_count }} reviews</span>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

            </swiper>
        </div>
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
import { searchBusinesses } from '../../../api/search';
import { nextTick, onMounted, ref } from 'vue';

const listBusiness = ref([])

let swiperInstance = ref(null);

const onSwiper = (swiper) => {
    swiperInstance = swiper;
    
};

const loadSlideBusinesses = async() =>{
    const res = await searchBusinesses({perPage:5})
    listBusiness.value = res.data.data

}

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

onMounted(()=>{
    loadSlideBusinesses()
})


</script>

<style scoped>
.swiper {
    width: 100%;
    padding: 50px 0;

}

.swiper-slide {
    position: relative;
    width: 540px;
    /* aspect-ratio: 3/4;
    border-radius: 14px;
    border: 1px solid #FFD700; */

}

.swiper-slide::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.6);
    transition: opacity 0.3s ease;
}


.swiper-slide-active::after {
    opacity: 0;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    user-select: none;
}

.swiper-button-next,
.swiper-button-prev {
  display: none !important;
}


@media (max-width:1100px) {
    .swiper-slide {
        width: 300px;
    }
}

@media (max-width:900px) {
    .swiper-slide {
        width: 250px;
    }
}

@media (max-width:700px) {
    .swiper-slide {
        width: 230px;
    }
}

@media (max-width:610px) {
    .swiper-slide {
        width: 200px;
    }
}
</style>

