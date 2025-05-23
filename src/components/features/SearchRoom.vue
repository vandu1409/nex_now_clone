<template>
  <!-- Số khách -->
  <div class="relative">
    <div @click.stop="toggleGuest"
      class="flex items-center px-4 py-2 border rounded-lg bg-white shadow-sm cursor-pointer hover:shadow-md">
      <i class="pi pi-user px-2 py-2 rounded-xl bg-[#E8E9EC] mr-3"></i>
      <span>{{ room }} Phòng - {{ adult }} người lớn - {{ child }} trẻ em</span>
    </div>

    <div v-if="showGuest" ref="guestDropdownRef" class="absolute z-30 mt-2 bg-white p-4 shadow-lg rounded-xl w-80">
      <div class="space-y-4">
        <div v-for="item in guestOptions" :key="item.label" class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-700">{{ item.label }}</p>
            <p class="text-xs text-gray-500">{{ item.description }}</p>
          </div>
          <div class="flex items-center gap-2">
            <button @click="item.decrement"
              class="w-6 h-6 flex items-center justify-center border rounded-full hover:bg-purple-100">-</button>
            <span class="w-4 text-center">{{ item.value }}</span>
            <button @click="item.increment"
              class="w-6 h-6 flex items-center justify-center border rounded-full hover:bg-purple-100">+</button>
          </div>
        </div>
      </div>
      <div class="text-right mt-4">
        <button @click="toggleGuest" class="bg-primary text-white px-4 py-2 rounded-full hover:bg-purple-950">
          Xác nhận
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const showGuest = ref(false)
const toggleGuest = () => showGuest.value = !showGuest.value
const guestDropdownRef = ref(null)


const props = defineProps({
  usage_quantity: Number,
  children_quantity: Number,
  room_quantity: Number
})

const room = ref(props.room_quantity)
const adult = ref(props.usage_quantity)
const child = ref(props.children_quantity)

const emit = defineEmits(['update:usage_quantity', 'update:children_quantity', 'update:room_quantity'])

watch(adult, (newVal) => {
  emit('update:usage_quantity', newVal)
})

watch(child, (newVal) => {
  emit('update:children_quantity', newVal)
})

watch(room, (newVal) => {
  emit('update:room_quantity', newVal)
})

watch(() => props.usage_quantity, (newVal) => {
  adult.value = newVal
})

watch(() => props.children_quantity, (newVal) => {
  child.value = newVal
})

watch(() => props.room_quantity, (newVal) => {
  room.value = newVal
})

const guestOptions = [
  {
    label: 'Số lượng phòng',
    description: '',
    value: room,
    increment: () => room.value++,
    decrement: () => { if (room.value > 1) room.value-- }
  },
  {
    label: 'Người lớn',
    description: 'Từ 18 tuổi trở lên',
    value: adult,
    increment: () => adult.value++,
    decrement: () => { if (adult.value > 1) adult.value-- }
  },
  {
    label: 'Trẻ em',
    description: 'Dưới 18 tuổi',
    value: child,
    increment: () => child.value++,
    decrement: () => { if (child.value > 0) child.value-- }
  }
]


function handleClickOutside(event) {
  if (guestDropdownRef.value && !guestDropdownRef.value.contains(event.target)) {
    showGuest.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
