<template>
  <div class="relative w-full h-screen bg-cover bg-center text-white"
    :style="{ backgroundImage: `url('${backgroundImage}')` }">
    <div
      class="absolute inset-0 after:absolute after:inset-0 after:bg-gradient-to-t after:from-white after:via-transparent after:to-transparent after:content-[''] z-[0]">
    </div>

    <div class="flex flex-col justify-between px-4 py-24">

      <!-- Div cha để căn phải -->
      <div class="flex justify-end">
        <!-- Div grid giữ nguyên -->
        <div class="grid grid-cols-3 gap-2">
          <div class="bg-[#f5f5ff] rounded-xl p-4 h-24 w-[150px] relative">
            <span class="font-semibold text-black">Lưu trú</span>
            <img src="https://nex-now.com/images/home/stay.svg"
              class="absolute bottom-2 right-2 w-12 h-12 object-contain" />
          </div>
          <div class="bg-[#f5f5ff] rounded-xl p-4 h-24 w-[150px] relative">
            <span class="font-semibold text-black">Ăn uống</span>
            <img src="https://nex-now.com/images/home/eating.svg"
              class="absolute bottom-2 right-2 w-12 h-12 object-contain" />
          </div>
          <div class="bg-[#f5f5ff] rounded-xl p-4 h-24 w-[150px] relative">
            <span class="font-semibold text-black">Làm đẹp</span>
            <img src="https://nex-now.com/images/home/beautify.svg"
              class="absolute bottom-2 right-2 w-12 h-12 object-contain" />
          </div>
          <div class="bg-[#f5f5ff] rounded-xl p-4 h-24 w-[150px] relative">
            <span class="font-semibold text-black">Du lịch</span>
            <img src="https://nex-now.com/images/home/tourist.svg"
              class="absolute bottom-2 right-2 w-12 h-12 object-contain" />
          </div>
          <div class="bg-[#f5f5ff] rounded-xl p-4 h-24 w-[150px] relative">
            <span class="font-semibold text-black">Giải trí</span>
            <img src="https://nex-now.com/images/home/entertainment.svg"
              class="absolute bottom-2 right-2 w-12 h-12 object-contain" />
          </div>
          <div class="bg-[#f5f5ff] rounded-xl p-4 h-24 w-[150px] relative">
            <span class="font-semibold text-black">Khác</span>
            <img src="https://nex-now.com/images/home/other.svg"
              class="absolute bottom-2 right-2 w-12 h-12 object-contain" />
          </div>
        </div>
      </div>

      <!-- Left: Text -->
      <div class="flex justify-start">
        <h1 class="text-6xl font-bold leading-tight">
          LET’S FIND SOMEWHERE <br />
          <span class="text-6xl font-bold block mt-2 text-white">“ONLY WE KNOW”</span>
        </h1>
      </div>

    </div>

    <div class="mt-[-60px] w-full px-4 flex flex-col justify-start items-center space-y-4">
      <div class="w-full px-4">
        <h1 class="font-bold uppercase text-xl text-white text-left">Đặt chỗ nhanh chóng, giá rẻ</h1>
      </div>
      <div class="w-full z-10">
        <SearchWrapper />
      </div>
    </div>


  </div>
</template>

<script setup>
import SearchWrapper from './search/SearchWrapper.vue';
import {onMounted, ref} from 'vue'

const images = [
  'https://nex-now.com/images/home/banner/banner-1.jpg',
  'https://nex-now.com/images/home/banner/banner-2.jpg',
  'https://nex-now.com/images/home/banner/banner-3.jpg'
]

const backgroundImage = ref('')

onMounted(() => {
  const randomIndex = Math.floor(Math.random() * images.length)
  backgroundImage.value = images[randomIndex]
})

</script>
