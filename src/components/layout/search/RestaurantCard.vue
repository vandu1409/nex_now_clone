<template>
    <div class="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-sm px-2 pt-2">
            <img :src="business?.featured_image?.file_path"
                class="w-full md:w-[30%] h-[200px] object-cover rounded-lg shadow-sm" />
            <!-- Phần thông tin -->
            <div class="px-4 py-2 flex-1 flex flex-col justify-between space-y-4">
                <!-- Thông tin nhà hàng -->
                <div class="space-y-4">
                    <h2 class="font-semibold text-xl">{{ business.name }}</h2>

                    <div class="flex items-center space-x-2">
                        <span v-for="i in 5" :key="i" class="text-yellow-400 text-sm">
                            <i :class="i <= business.average_star ? 'pi pi-star-fill' : 'pi pi-star'"></i>
                        </span>
                        <span class="text-sm font-medium">{{ business.average_star }}</span>
                        <span class="text-xs text-gray-500">{{ business.review_count }} Reviews</span>
                    </div>

                    <p class="text-xs text-gray-400 flex items-center gap-1">
                        <i class="pi pi-map-marker text-sm"></i>
                        {{ business.address }}
                    </p>

                    <div class="flex gap-2 mt-1 flex-wrap">
                        <button v-for="time in ['16:30', '17:00', '17:30']" :key="time"
                            class="text-sm border rounded-3xl px-4 py-1 hover:bg-primary hover:text-white transition">
                            {{ time }}
                        </button>
                    </div>
                </div>

                <!-- Giá và nút -->
                <div
                    class="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-3 border-t mt-3 gap-3">
                    <p class="text-base text-gray-800">
                        ⚡ Giá từ: <b>{{ business.price_from.toLocaleString() }} VNĐ</b>
                        đến: <b>{{ business.price_to.toLocaleString() }} VNĐ</b>
                    </p>

                    <button class="bg-primary px-8 py-2 rounded-full text-white">
                        Đặt ngay
                    </button>
                </div>
            </div>
    </div>

</template>

<script setup>
defineProps(['business'])
</script>
