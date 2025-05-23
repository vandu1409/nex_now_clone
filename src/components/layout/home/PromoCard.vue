<template>
  <div class="p-4 border rounded-lg">
    <!-- Thông tin nhà hàng -->
    <div class="flex items-start gap-4 mb-4">
      <img
        :src="data?.featured_image?.file_path"
        alt="Avatar"
        class="w-10 h-10 rounded-full"
      />
      <div class="flex flex-col flex-grow">
        <p class="font-semibold">{{ data.name }}</p>
        <p class="truncate whitespace-nowrap overflow-hidden text-xs text-gray-600 mt-1 w-[200px]">
          <i class="pi pi-map-marker mr-1"></i>
          {{ data.address }}
        </p>
      </div>
      <span class="px-4 py-1 text-sm rounded-full bg-gray-200">Chưa đánh giá</span>
    </div>

    <!-- Danh sách món ăn -->
    <div class="flex flex-wrap -mx-2">
      <div
        v-for="(item, i) in data?.products"
        :key="i"
        class="w-full sm:w-1/2 px-2 mb-4"
      >
        <img
          :src="item?.featured_image?.file_path"
          alt="Food"
          class="w-[300px] h-[160px] object-cover rounded-lg"
        />
        <h2 class="font-semibold text-sm mt-2">{{ item.name }}</h2>
      </div>
    </div>

    <!-- Đặt chỗ -->
    <div class="border rounded-lg px-4 py-3">
      <div class="font-bold inline-flex items-center gap-1 text-primary">
        <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
          <path fill="#5F1F76" fill-rule="evenodd" clip-rule="evenodd"
            d="M5.36272 2.11177C5.38075 2.04564 5.43662 2 5.5 2C5.56338 2 5.61925 2.04564 5.63728 2.11177C5.63728 2.11177 5.88854 3.03056 6.15785 4.01603C6.58697 5.58607 7.71278 6.81422 9.15197 7.28235C10.0553 7.57614 10.8975 7.85024 10.8975 7.85024C10.9582 7.86991 11 7.93086 11 8C11 8.06914 10.9582 8.13009 10.8975 8.14976C10.8975 8.14976 10.0553 8.42387 9.15197 8.71765C7.71278 9.18579 6.58697 10.4139 6.15785 11.984C5.88854 12.9694 5.63728 13.8882 5.63728 13.8882C5.61925 13.9544 5.56338 14 5.5 14C5.43662 14 5.38075 13.9544 5.36272 13.8882C5.36272 13.8882 5.11146 12.9694 4.84215 11.984C4.41303 10.4139 3.28722 9.18579 1.84803 8.71765C0.944682 8.42387 0.102459 8.14976 0.102459 8.14976C0.0418337 8.13009 0 8.06914 0 8C0 7.93086 0.0418337 7.86991 0.102459 7.85024C0.102459 7.85024 0.944682 7.57614 1.84803 7.28235C3.28722 6.81422 4.41303 5.58607 4.84215 4.01603C5.11146 3.03056 5.36272 2.11177 5.36272 2.11177Z"
          />
          <path fill="#5F1F76" fill-rule="evenodd" clip-rule="evenodd"
            d="M11.9501 0.0372577C11.9566 0.0152136 11.977 0 12 0C12.023 0 12.0434 0.0152136 12.0499 0.0372577C12.0499 0.0372577 12.1413 0.343521 12.2392 0.672011C12.3953 1.19536 12.8046 1.60474 13.328 1.76078C13.6565 1.85871 13.9627 1.95008 13.9627 1.95008C13.9848 1.95664 14 1.97695 14 2C14 2.02305 13.9848 2.04336 13.9627 2.04992C13.9627 2.04992 13.6565 2.14129 13.328 2.23922C12.8046 2.39526 12.3953 2.80465 12.2392 3.32799C12.1413 3.65648 12.0499 3.96274 12.0499 3.96274C12.0434 3.98479 12.023 4 12 4C11.977 4 11.9566 3.98479 11.9501 3.96274C11.9501 3.96274 11.8587 3.65648 11.7608 3.32799C11.6047 2.80465 11.1954 2.39526 10.672 2.23922C10.3435 2.14129 10.0373 2.04992 10.0373 2.04992C10.0152 2.04336 10 2.02305 10 2C10 1.97695 10.0152 1.95664 10.0373 1.95008C10.0373 1.95008 10.3435 1.85871 10.672 1.76078C11.1954 1.60474 11.6047 1.19536 11.7608 0.672011C11.8587 0.343521 11.9501 0.0372577 11.9501 0.0372577Z"
          />
        </svg>
        Đặt chỗ ngay
      </div>
      <div class="mt-3 flex gap-2">
        <button class="rounded-3xl px-4 py-1 border hover:bg-primary hover:text-white transition">10:30</button>
        <button class="rounded-3xl px-4 py-1 border hover:bg-primary hover:text-white transition">11:00</button>
        <button class="rounded-3xl px-4 py-1 border hover:bg-primary hover:text-white transition">11:30</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';



const props = defineProps({
  business:Object
})

const data = ref(props.business)
// const data = [
//   {
//     name: 'Combo thuyền hải sản sốt thái',
//     image: 'https://res.cloudinary.com/nifehub-production/image/upload/w_200/public/669/1f3/8c3/6691f38c39ee1081806050.jpg'
//   },
//   {
//     name: 'Gà tre đập lu kiểu Dìn Ký',
//     image: 'https://res.cloudinary.com/nifehub-production/image/upload/w_200/public/669/1f4/393/6691f43938912804364428.jpg'
//   },
//   {
//     name: 'Gà ta đập lu kiểu Dìn Ký',
//     image: 'https://res.cloudinary.com/nifehub-production/image/upload/w_200/public/669/1f5/4f0/6691f54f08632785601287.jpg'
//   },
//   {
//     name: 'Gà nướng',
//     image: 'https://res.cloudinary.com/nifehub-production/image/upload/w_200/public/669/1f7/560/6691f75608803337712541.png'
//   }
// ];
</script>
