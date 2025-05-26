<template>
    <div class="flex flex-col md:flex-row gap-6 p-6">
        <!-- Bên trái: Bộ lọc -->
        <div class="w-full md:w-80 shrink-0">
            <div class="flex flex-col gap-4">
                <PriceSlider v-model="priceRange" />
                <RatingFilter v-model:star="star" />
            </div>
        </div>

        <div class="flex-1 space-y-4" v-if="businesses.length > 0">
            <div class="flex justify-between items-center w-full">
                <div>
                    <p class="text-gray-600">Tìm thấy {{ businesses.length }} kết quả</p>
                </div>

                <div class="w-48 text-sm custom-dropdown">
                    <Dropdown v-model="selectedSort" :options="sortOptions" optionValue="value" optionLabel="label"
                        placeholder="Sắp xếp theo" class="w-full text-gray-300 border-none bg-gray-300">
                        <template #value="{ value }">
                            <div class="flex items-center space-x-2">
                                <i class="pi pi-align-center text-gray-500 mr-3"></i>
                                <span>
                                    {{
                                        sortOptions.find((option) => option.value === value)
                                            ?.label || "Sắp xếp theo"
                                    }}
                                </span>
                            </div>
                        </template>

                        <template #dropdownicon><span class="hidden"></span></template>
                    </Dropdown>
                </div>
            </div>

            <template v-if="!loading.isLoading">
                <RestaurantCard v-for="b in businesses" :key="b.id" :business="b" />
            </template>

            <template v-else>
                <div class="mt-10">
                    <SearchCardSkeleton v-for="n in 4" :key="n" />
                </div>
            </template>
        </div>
        <div v-if="businesses.length == 0" class="h-96 flex flex-col justify-center items-center w-full">
            <img src="https://nex-now.com/images/booking/not-found.svg" alt="" />
            <span class="text-sm text-gray-400">Không có dữ liệu</span>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import FilterSidebar from "./FilterSidebar.vue";
import RestaurantCard from "./RestaurantCard.vue";
import RatingFilter from "./RatingFilter.vue";
import PriceSlider from "./PriceSlider.vue";
import Dropdown from "primevue/dropdown";
import SearchCardSkeleton from "../../common/SearchCardSkeleton.vue";
import { useLoadingStore } from "../../../store/loading";

const props = defineProps({
    priceRange: Array,
    star: Array,
    listBusiness: Array,
    sort: String,
});

const loading = useLoadingStore()
const selectedSort = ref(props.sort);

const sortOptions = [
    { label: "Đánh giá thấp", value: "rating_asc" },
    { label: "Đánh giá cao", value: "rating_desc" },
    { label: "Giá tăng dần", value: "price_asc" },
    { label: "Giá giảm dần", value: "price_desc" },
];

const businesses = ref([]);

const emit = defineEmits(["update:priceRange", "update:star", "update:sort"]);

const priceRange = ref(props.priceRange || [0, 9000000]);
const star = ref(props.star);

watch(
    () => props.priceRange,
    (val) => {
        priceRange.value = val || [0, 9000000];
    }
);

watch(
    priceRange,
    (val) => {
        emit("update:priceRange", val);
    },
    { deep: true }
);

watch(star, (val) => {
    emit("update:star", val);
});
watch(selectedSort, (newVal) => {
    emit("update:sort", newVal);
});

watch(
    () => props.sort,
    (newVal) => {
        selectedSort.value = newVal;
    }
);

watch(
    () => props.listBusiness,
    (newVal) => {
        businesses.value = newVal;
    }
);

watch(
    () => props.star,
    (newVal) => {
        star.value = newVal;
    }
);

watch(
    () => props.priceRange,
    (newVal) => {
        priceRange.value = newVal;
    }
);

// const priceRange = ref([0, 9000000])
// const selectedRatings = ref([])

// const filteredRestaurants = computed(() => {
//     return restaurants.value.filter(r =>
//         r.priceMin >= priceRange.value[0] &&
//         r.priceMax <= priceRange.value[1] &&
//         (selectedRatings.value.length === 0 || selectedRatings.value.includes(r.rating))
//     )
// })
</script>
<style scoped>
/* .custom-dropdown {
    --p-autocomplete-option-selected-background:red
    --p-autocomplete-option-focus-background

} */
</style>