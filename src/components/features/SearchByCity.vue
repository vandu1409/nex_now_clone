<template>
  <div class="w-full relative">
    <div
      class="flex items-center border rounded-md px-3 py-3 cursor-pointer bg-white"
      @click="toggleDropdown"
    >
      <i class="pi pi-map-marker text-gray-400 mr-2"></i>
      <input
        type="text"
        placeholder="Tìm kiếm"
        v-model="search"
        @input="filterLocations"
        class="flex-grow outline-none"
      />
      <i
        :class="['pi', dropdownOpen ? 'pi-chevron-up' : 'pi-chevron-down', 'text-gray-500']"
      ></i>
    </div>

    <ul
      v-if="dropdownOpen"
      class="absolute z-10 mt-1 w-full max-h-48 overflow-y-auto bg-white border rounded-md shadow-lg"
      style="scrollbar-width: thin; scrollbar-color: #7c3aed #f3f4f6;"
    >
      <li
        v-for="loc in filteredLocations"
        :key="loc.id"
        class="flex items-center gap-2 px-4 py-2 hover:bg-purple-100 cursor-pointer"
        @click="selectLocation(loc.id, loc.name)"
      >
        <i class="pi pi-map-marker text-purple-600"></i>
        <span class="text-gray-700">{{ loc.name }}</span>
      </li>
      <li v-if="filteredLocations.length === 0" class="px-4 py-2 text-gray-400">
        Không tìm thấy địa điểm
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { getAllCities } from '../../api/search'
import { item } from '@primeuix/themes/aura/breadcrumb'

const locations = ref([])      
const search = ref('')          
const dropdownOpen = ref(false) 
const props = defineProps({
  modelValue: [String, Number]
});
const emit = defineEmits(['update:modelValue']);
const selected = ref(props.modelValue);

watch(() => selected, (newVal) => {
  selected.value = newVal;
  const found = locations.value.find(item => item.id == newVal);
  console.log('city'+newVal)
  if (found) {
    search.value = found.name;
  } else {
    search.value = '';
  }
  dropdownOpen.value = false;
});

const filteredLocations = computed(() => {
  const query = search.value.trim().toLowerCase();
  if (!query) {
    return locations.value; 
  }
  return locations.value.filter(location =>
    location.name.toLowerCase().includes(query)
  );
});

const loadCities = async () => {
  try {
    const response = await getAllCities();
    return response;
  } catch (error) {
    console.error('Lỗi khi tải danh sách thành phố:', error);
    return [];
  }
}

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
}

const selectLocation = (id,name) => {
  search.value = name;
  dropdownOpen.value = false;
  selected.value = id

   emit('update:modelValue', id);
}

onMounted(async () => {
  try {
    const response = await loadCities();
    locations.value = response.data; 

    if(selected.value){
    const found = locations.value.find(item => item.id == selected.value)
    search.value = found?.name
    }

  } catch (error) {
    console.error('Không thể tải danh sách thành phố', error);
  }
});
</script>


<style scoped>
/* Scrollbar màu tím cho Firefox */
ul::-webkit-scrollbar {
  width: 8px;
}
ul::-webkit-scrollbar-track {
  background: #f3f4f6;
}
ul::-webkit-scrollbar-thumb {
  background-color: #7c3aed;
  border-radius: 4px;
  border: 2px solid #f3f4f6;
}
</style>
