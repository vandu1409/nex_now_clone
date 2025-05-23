<template>
    <div class="max-w-sm rounded-xl overflow-hidden shadow-lg mt-5 mb-5 ml-5 relative">

        <!-- Icons góc trên trái và phải -->
        <div class="absolute top-2 left-2 z-10">
            <i class="pi pi-heart text-white text-xl bg-black/50 rounded-full p-2 cursor-pointer hover:bg-black/70"></i>
        </div>
        <div class="absolute top-2 right-2 z-10">
            <i
                class="pi pi-bookmark text-yellow-300 text-xl bg-white rounded-full p-2 cursor-pointer hover:bg-black/70"></i>
        </div>

        <!-- Hình ảnh -->
        <img class="w-full h-[200px]" :src="businessLocal?.featured_image?.file_path" alt="Sunset in the mountains" />

        <!-- Nội dung -->
        <div class="px-4 py-2">
            <div class="font-bold text-lg mb-2">{{ businessLocal.name }}</div>
            <p class="truncate whitespace-nowrap overflow-hidden text-xs ml-2">
                <i class="pi pi-map-marker"></i>
                {{ businessLocal.address }}
            </p>
        </div>

        <div class="rounded-lg mx-4 my-2 px-4 py-2 border">
            <span class="font-bold inline-flex items-center gap-1"><svg data-v-e4b48a6f="" width="14" height="14"
                    viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path data-v-e4b48a6f="" fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.36272 2.11177C5.38075 2.04564 5.43662 2 5.5 2C5.56338 2 5.61925 2.04564 5.63728 2.11177C5.63728 2.11177 5.88854 3.03056 6.15785 4.01603C6.58697 5.58607 7.71278 6.81422 9.15197 7.28235C10.0553 7.57614 10.8975 7.85024 10.8975 7.85024C10.9582 7.86991 11 7.93086 11 8C11 8.06914 10.9582 8.13009 10.8975 8.14976C10.8975 8.14976 10.0553 8.42387 9.15197 8.71765C7.71278 9.18579 6.58697 10.4139 6.15785 11.984C5.88854 12.9694 5.63728 13.8882 5.63728 13.8882C5.61925 13.9544 5.56338 14 5.5 14C5.43662 14 5.38075 13.9544 5.36272 13.8882C5.36272 13.8882 5.11146 12.9694 4.84215 11.984C4.41303 10.4139 3.28722 9.18579 1.84803 8.71765C0.944682 8.42387 0.102459 8.14976 0.102459 8.14976C0.0418337 8.13009 0 8.06914 0 8C0 7.93086 0.0418337 7.86991 0.102459 7.85024C0.102459 7.85024 0.944682 7.57614 1.84803 7.28235C3.28722 6.81422 4.41303 5.58607 4.84215 4.01603C5.11146 3.03056 5.36272 2.11177 5.36272 2.11177Z"
                        fill="#5F1F76"></path>
                    <path data-v-e4b48a6f="" fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.9501 0.0372577C11.9566 0.0152136 11.977 0 12 0C12.023 0 12.0434 0.0152136 12.0499 0.0372577C12.0499 0.0372577 12.1413 0.343521 12.2392 0.672011C12.3953 1.19536 12.8046 1.60474 13.328 1.76078C13.6565 1.85871 13.9627 1.95008 13.9627 1.95008C13.9848 1.95664 14 1.97695 14 2C14 2.02305 13.9848 2.04336 13.9627 2.04992C13.9627 2.04992 13.6565 2.14129 13.328 2.23922C12.8046 2.39526 12.3953 2.80465 12.2392 3.32799C12.1413 3.65648 12.0499 3.96274 12.0499 3.96274C12.0434 3.98479 12.023 4 12 4C11.977 4 11.9566 3.98479 11.9501 3.96274C11.9501 3.96274 11.8587 3.65648 11.7608 3.32799C11.6047 2.80465 11.1954 2.39526 10.672 2.23922C10.3435 2.14129 10.0373 2.04992 10.0373 2.04992C10.0152 2.04336 10 2.02305 10 2C10 1.97695 10.0152 1.95664 10.0373 1.95008C10.0373 1.95008 10.3435 1.85871 10.672 1.76078C11.1954 1.60474 11.6047 1.19536 11.7608 0.672011C11.8587 0.343521 11.9501 0.0372577 11.9501 0.0372577Z"
                        fill="#5F1F76"></path>
                </svg>Đặt chỗ ngay</span>
            <div class="mt-2 space-x-2">
                <button class="rounded-3xl px-4 py-1 text-black border hover:bg-primary hover:text-white">10:30</button>
                <button class="rounded-3xl px-4 py-1 text-black border hover:bg-primary hover:text-white">11:00</button>
                <button class="rounded-3xl px-4 py-1 text-black border hover:bg-primary hover:text-white">11:30</button>
            </div>
        </div>

    </div>

</template>
<script setup>
import { ref, watch } from 'vue';
import Skeleton from '../../common/Skeleton.vue';

const props = defineProps({
    business: Object,
    isLoading: Boolean
})
const businessLocal = ref(props.business)
// const loading = ref(props.isLoading)

watch(
    () => props.business,
    (newVal) => {
        businessLocal.value = newVal
    },
    { immediate: true }
)

// watch(()=>props.isLoading,(newVal)=>{
//     loading.value = newVal
// })

</script>