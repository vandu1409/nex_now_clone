<template>
  <div class="">
    <Header></Header>
    <Banner></Banner>
    <div class="md:px-10">
      <div class="mt-20">
        <PlanIntro></PlanIntro>
      </div>
      <CategorySlider></CategorySlider>
      <div class="mt-10">
        <LocationHighlight></LocationHighlight>
      </div>
      <div class="mt-10">
        <SliderImages></SliderImages>
      </div>
      <div>
        <ProductList title="Booking phổ biến nhất"></ProductList>
      </div>
      <div class="mt-10">
        <ProductList title="Trải nghiệm không gian và đặt chỗ ngay"></ProductList>
      </div>
      <PromoSection></PromoSection>

    </div>
  </div>
</template>

<script setup>
import Header from "@/components/common/Header.vue";
import Banner from "@/components/layout/home/Banner.vue";
import PlanIntro from "@/components/layout/home/PlanIntro.vue";
import CategorySlider from "@/components/layout/home/CategorySlider.vue";
import LocationHighlight from "@/components/layout/home/LocationHighlight.vue";
import ProductList from "../components/layout/home/ProductList.vue";
import SliderImages from "../components/layout/home/SliderImages.vue";
import PromoSection from "../components/layout/home/PromoSection.vue";
import PromoCard from "../components/layout/home/PromoCard.vue";
</script>
