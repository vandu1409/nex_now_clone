<template>
    <div class="flex justify-center">
        <div class="w-full md:w-1/2 relative">
            <!-- Nút quay lại -->
            <div class="absolute top-5 left-5" @click="goBack">
                <div class="flex items-center space-x-1">
                    <i class="pi pi-angle-left"></i>
                    <span>Trở lại</span>
                </div>
            </div>

            <div class="min-h-screen flex flex-col items-center justify-center bg-white px-4 w-full">
                <!-- Logo -->
                <div class="text-center mb-6">
                    <img src="https://nex-now.com/images/common/logo.png" alt="Logo" class="mx-auto w-20 h-20" />
                    <h1 class="text-2xl font-bold mt-2">Đăng ký</h1>
                </div>

                <!-- Form -->
                <form @submit.prevent="submitForm" class="w-full px-6 space-y-5">
                    <!-- Tên người dùng -->
                    <div>
                        <label class="block mb-1 font-medium">Tên người dùng</label>
                        <div class="flex items-center border rounded px-3 py-2 bg-white">
                            <i class="pi pi-user text-gray-500 mr-2"></i>
                            <input v-model="form.name" type="text" placeholder="Vui lòng nhập tên người dùng"
                                class="w-full outline-none" @blur="validateUsername" />
                        </div>
                        <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
                    </div>

                    <!-- Email -->
                    <div>
                        <label class="block mb-1 font-medium">Email</label>
                        <div class="flex items-center border rounded px-3 py-2 bg-white">
                            <i class="pi pi-envelope text-gray-500 mr-2"></i>
                            <input v-model="form.email" type="email" placeholder="Vui lòng nhập email"
                                class="w-full outline-none" @blur="validateEmail" />
                        </div>
                        <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                    </div>

                    <!-- Mật khẩu -->
                    <div>
                        <label class="block mb-1 font-medium">Mật khẩu</label>
                        <div class="flex items-center border rounded px-3 py-2 bg-white">
                            <i class="pi pi-lock text-gray-500 mr-2"></i>
                            <input v-model="form.password" :type="showPassword ? 'text' : 'password'"
                                placeholder="Vui lòng nhập mật khẩu" class="w-full outline-none"
                                @blur="validatePassword" />
                            <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"
                                @click="showPassword = !showPassword" class="cursor-pointer text-gray-500"></i>
                        </div>
                        <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
                    </div>

                    <!-- Xác nhận mật khẩu -->
                    <div>
                        <label class="block mb-1 font-medium">Xác nhận mật khẩu</label>
                        <div class="flex items-center border rounded px-3 py-2 bg-white">
                            <i class="pi pi-lock text-gray-500 mr-2"></i>
                            <input v-model="form.password_confirmation" :type="showPassword ? 'text' : 'password'"
                                placeholder="Vui lòng nhập xác nhận mật khẩu" class="w-full outline-none"
                                @blur="validateConfirmPassword" />
                            <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"
                                @click="showPassword = !showPassword" class="cursor-pointer text-gray-500"></i>
                        </div>
                        <p v-if="errors.password_confirmation" class="text-red-500 text-sm mt-1">{{ errors.password_confirmation }}
                        </p>
                    </div>

                    <!-- Checkbox -->
                    <div class="flex items-start">
                        <input v-model="form.accepted" type="checkbox" class="mt-1 mr-2" />
                        <label class="text-sm text-gray-700">
                            Tôi chấp nhận điều khoản của Nifehub về
                            <a href="#" class="text-purple-600 underline">Chính sách bảo mật</a> và
                            <a href="#" class="text-purple-600 underline">Điều khoản dịch vụ</a>
                        </label>
                    </div>

                    <!-- Nút đăng ký -->
                    <button type="submit"
                        class="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-full font-semibold">
                        Đăng ký
                    </button>
                </form>
            </div>
        </div>

        <!-- Ảnh bên phải -->
        <div
            class="w-1/2 bg-[url('https://nex-now.com/images/login/register-banner.png')] bg-cover bg-center hidden md:block">
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { register } from '../api/auth'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const router = useRouter()
const form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    accepted: false
})

const errors = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const showPassword = ref(false)

function validateUsername() {
    errors.name = form.name.trim() === '' ? 'Yêu cầu nhập tên' : ''
}

function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) {
        errors.email = 'Yêu cầu nhập email'
    } else if (!regex.test(form.email)) {
        errors.email = 'Email không hợp lệ'
    } else {
        errors.email = ''
    }
}

function validatePassword() {
    errors.password = form.password.length < 6 ? 'Mật khẩu tối thiểu 6 ký tự' : ''
}

function validateConfirmPassword() {
    errors.password_confirmation =
        form.password_confirmation !== form.password ? 'Mật khẩu xác nhận không khớp' : ''
}
function runValidations() {
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
}

function hasValidationErrors() {
    return Object.values(errors).some(Boolean);
}

async function submitForm() {
    runValidations();

    if (!form.accepted) {
        return alert('Bạn cần chấp nhận điều khoản.');
    }

    if (hasValidationErrors()) {
        return;
    }

    try {
        const response = await register(form)
        toast.add({
            severity: 'success',
            summary: 'Thành công',
            detail: response.message || 'Đăng ký thành công!',
            life: 3000
        })
        router.push('/login');
    } catch (error) {
        toast.add({
            severity: 'error',
            summary: 'Lỗi',
            detail: error?.response?.data?.message || 'Đăng ký thất bại!',
            life: 4000
        })
    }
}


function goBack() {
    window.history.back()
}
</script>
