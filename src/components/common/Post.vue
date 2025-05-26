<template>
    <div class="py-4 rounded-3xl">
        <Card style="width: 350px">
            <template #header>
                <img alt="user header" class="h-[200px] w-full rounded-t-lg"
                    src="https://res.cloudinary.com/nifehub-production/image/upload/public/674/03a/2b4/67403a2b42b2f953381119.jpg" />
            </template>
            <template #subtitle>18:30 4-T5-2024</template>
            <template #title>
                <span class="truncate block w-full">Nhà hàng nổi tiếng sài gòn</span>
            </template>
            <template #content>
                <p class="m-0 clamp-3">
                    Thành phố Hồ Chí Minh, trung tâm kinh tế và du lịch lớn nhất Việt Nam, không chỉ nổi tiếng bởi nhịp
                    sống năng động mà còn là điểm đến của những khách sạn xa hoa, đẳng cấp quốc tế. Dù bạn đến Sài Gòn
                    để công tác hay nghỉ dưỡng, danh sách top khách sạn 5-6 sao tại Sài Gòn dưới đây sẽ giúp bạn lựa
                    chọn được nơi lưu trú hoàn hảo với dịch vụ sang trọng và tiện nghi tối ưu. Đừng quên đặt phòng qua
                    NEX để nhận ưu đãi hấp dẫn và trải nghiệm dịch vụ đặt phòng nhanh chóng, tiện lợi!
                </p>
            </template>
        </Card>
    </div>
</template>

<script setup>
import Card from 'primevue/card';

</script>

<style scoped>
.clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
