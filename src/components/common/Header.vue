<template>
    <div class="header flex justify-between p-5 " :class="[
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'bg-white shadow-md text-black' : 'text-white bg-[#00000025]'
    ]">

        <div class="flex justify-center relative">
            <div class="mr-5 z-100 absolute left-6 bottom-[-32px] z-10">
                <a href="">
                    <img src="https://nex-now.com/images/common/logo.png" height="50" width="50" alt="">
                </a>
            </div>
            <div class="ml-32">
                <nav class="hidden md:block">
                    <ul class="flex justify-center items-center gap-10 text-1xl uppercase">
                        <li><router-link to="/" :class="route.path === '/' && 'font-bold'">Trang chủ</router-link></li>
                        <li><router-link to="/search" :class="route.path === '/search' && 'font-bold'">Tìm
                                kiếm</router-link></li>
                        <li>Kế hoạch</li>
                        <li>Khuyến mãi</li>
                        <li>Tin tức</li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="pr-10">
            <button v-if="!auth.isLoggedIn" class="space-x-2"><span><router-link to="/login">Đăng nhập</router-link>
                </span> <i class="pi pi-user"></i></button>

            <button v-else class="space-x-2"><span><button @click="logout">Đăng xuất</button>
                </span> <i class="pi pi-sign-out"></i></button>
        </div>


    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../../store/authStore'
import { useToast } from 'primevue'


const auth = useAuthStore()
const route = useRoute()
const router = useRouter()
const toast = useToast()


const isScrolled = ref(false)

const logout = () => {
    try {
        auth.logout()
        router.push('/login')

        toast.add({
            severity: 'success',
            summary: 'Thông báo',
            detail: 'Đăng xuất thành công!',
            life: 4000
        })
    } catch (err) {
        console.log(err)
        toast.add({
            severity: 'error',
            summary: 'Thông báo',
            detail: 'Đăng xuất thất bại!',
            life: 4000
        })
    }
}

const handleScroll = () => {
    isScrolled.value = window.scrollY > 350
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>