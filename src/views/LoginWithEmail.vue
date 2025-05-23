<template>
    <div class="h-screen flex">
        <div class="w-full md:w-1/2 px-4 relative ">
            <div class="absolute top-2 left-2">
                <div @click="goBack" class="flex items-center space-x-1">
                    <i class="pi pi-angle-left"></i>
                    <span>Trở lại</span>
                </div>
            </div>

            <div class="flex items-center justify-center min-h-screen w-full">
                <div class="space-y-2 w-full px-16">
                    <img src="https://nex-now.com/images/common/logo.png" alt="" class="mx-auto" />
                    <h1 class="text-3xl font-bold w-full text-center">Đăng nhập</h1>
                    <div class="w-full flex justify-center py-3">
                        <svg width="332" height="10" viewBox="0 0 332 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                            data-v-5ec99945="">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M171.632 0.0885006C171.648 0.0361379 171.696 0 171.751 0C171.805 0 171.854 0.0361379 171.869 0.0885006C171.869 0.0885006 172.086 0.815985 172.319 1.59627C172.69 2.8394 173.662 3.81183 174.905 4.18249C175.685 4.41511 176.413 4.63214 176.413 4.63214C176.465 4.64772 176.501 4.69598 176.501 4.75072C176.501 4.80546 176.465 4.85372 176.413 4.8693C176.413 4.8693 175.685 5.08633 174.905 5.31895C173.662 5.68961 172.69 6.66205 172.319 7.90517C172.086 8.68545 171.869 9.41294 171.869 9.41294C171.854 9.46531 171.805 9.50144 171.751 9.50144C171.696 9.50144 171.648 9.46531 171.632 9.41294C171.632 9.41294 171.415 8.68545 171.182 7.90517C170.812 6.66205 169.839 5.68961 168.596 5.31895C167.816 5.08633 167.089 4.8693 167.089 4.8693C167.036 4.85372 167 4.80546 167 4.75072C167 4.69598 167.036 4.64772 167.089 4.63214C167.089 4.63214 167.816 4.41511 168.596 4.18249C169.839 3.81183 170.812 2.8394 171.182 1.59627C171.415 0.815985 171.632 0.0885006 171.632 0.0885006Z"
                                fill="#E3AAFF" data-v-5ec99945=""></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M184.013 0.0885006C184.029 0.0361379 184.077 0 184.132 0C184.186 0 184.235 0.0361379 184.25 0.0885006C184.25 0.0885006 184.467 0.815985 184.7 1.59627C185.07 2.8394 186.043 3.81183 187.286 4.18249C188.066 4.41511 188.794 4.63214 188.794 4.63214C188.846 4.64772 188.882 4.69598 188.882 4.75072C188.882 4.80546 188.846 4.85372 188.794 4.8693C188.794 4.8693 188.066 5.08633 187.286 5.31895C186.043 5.68961 185.07 6.66205 184.7 7.90517C184.467 8.68545 184.25 9.41294 184.25 9.41294C184.235 9.46531 184.186 9.50144 184.132 9.50144C184.077 9.50144 184.029 9.46531 184.013 9.41294C184.013 9.41294 183.796 8.68545 183.563 7.90517C183.193 6.66205 182.22 5.68961 180.977 5.31895C180.197 5.08633 179.469 4.8693 179.469 4.8693C179.417 4.85372 179.381 4.80546 179.381 4.75072C179.381 4.69598 179.417 4.64772 179.469 4.63214C179.469 4.63214 180.197 4.41511 180.977 4.18249C182.22 3.81183 183.193 2.8394 183.563 1.59627C183.796 0.815985 184.013 0.0885006 184.013 0.0885006Z"
                                fill="#E3AAFF" data-v-5ec99945=""></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M196.394 0.0885006C196.409 0.0361379 196.458 0 196.512 0C196.567 0 196.615 0.0361379 196.631 0.0885006C196.631 0.0885006 196.848 0.815985 197.081 1.59627C197.451 2.8394 198.424 3.81183 199.667 4.18249C200.447 4.41511 201.175 4.63214 201.175 4.63214C201.227 4.64772 201.263 4.69598 201.263 4.75072C201.263 4.80546 201.227 4.85372 201.175 4.8693C201.175 4.8693 200.447 5.08633 199.667 5.31895C198.424 5.68961 197.451 6.66205 197.081 7.90517C196.848 8.68545 196.631 9.41294 196.631 9.41294C196.615 9.46531 196.567 9.50144 196.512 9.50144C196.458 9.50144 196.409 9.46531 196.394 9.41294C196.394 9.41294 196.177 8.68545 195.944 7.90517C195.574 6.66205 194.601 5.68961 193.358 5.31895C192.578 5.08633 191.85 4.8693 191.85 4.8693C191.798 4.85372 191.762 4.80546 191.762 4.75072C191.762 4.69598 191.798 4.64772 191.85 4.63214C191.85 4.63214 192.578 4.41511 193.358 4.18249C194.601 3.81183 195.574 2.8394 195.944 1.59627C196.177 0.815985 196.394 0.0885006 196.394 0.0885006Z"
                                fill="#E3AAFF" data-v-5ec99945=""></path>
                            <path d="M202.124 4.60645H331.678" stroke="url(#paint0_linear_13651_24205)"
                                data-v-5ec99945="">
                            </path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M160.046 0.0885006C160.03 0.0361379 159.982 0 159.927 0C159.872 0 159.824 0.0361379 159.808 0.0885006C159.808 0.0885006 159.591 0.815985 159.359 1.59627C158.988 2.8394 158.016 3.81183 156.773 4.18249C155.992 4.41511 155.265 4.63214 155.265 4.63214C155.212 4.64772 155.176 4.69598 155.176 4.75072C155.176 4.80546 155.212 4.85372 155.265 4.8693C155.265 4.8693 155.992 5.08633 156.773 5.31895C158.016 5.68961 158.988 6.66205 159.359 7.90517C159.591 8.68545 159.808 9.41294 159.808 9.41294C159.824 9.46531 159.872 9.50144 159.927 9.50144C159.982 9.50144 160.03 9.46531 160.046 9.41294C160.046 9.41294 160.263 8.68545 160.495 7.90517C160.866 6.66205 161.838 5.68961 163.081 5.31895C163.862 5.08633 164.589 4.8693 164.589 4.8693C164.642 4.85372 164.678 4.80546 164.678 4.75072C164.678 4.69598 164.642 4.64772 164.589 4.63214C164.589 4.63214 163.862 4.41511 163.081 4.18249C161.838 3.81183 160.866 2.8394 160.495 1.59627C160.263 0.815985 160.046 0.0885006 160.046 0.0885006Z"
                                fill="#E3AAFF" data-v-5ec99945=""></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M147.665 0.0885006C147.649 0.0361379 147.601 0 147.546 0C147.491 0 147.443 0.0361379 147.428 0.0885006C147.428 0.0885006 147.211 0.815985 146.978 1.59627C146.607 2.8394 145.635 3.81183 144.392 4.18249C143.611 4.41511 142.884 4.63214 142.884 4.63214C142.832 4.64772 142.795 4.69598 142.795 4.75072C142.795 4.80546 142.832 4.85372 142.884 4.8693C142.884 4.8693 143.611 5.08633 144.392 5.31895C145.635 5.68961 146.607 6.66205 146.978 7.90517C147.211 8.68545 147.428 9.41294 147.428 9.41294C147.443 9.46531 147.491 9.50144 147.546 9.50144C147.601 9.50144 147.649 9.46531 147.665 9.41294C147.665 9.41294 147.882 8.68545 148.114 7.90517C148.485 6.66205 149.457 5.68961 150.701 5.31895C151.481 5.08633 152.208 4.8693 152.208 4.8693C152.261 4.85372 152.297 4.80546 152.297 4.75072C152.297 4.69598 152.261 4.64772 152.208 4.63214C152.208 4.63214 151.481 4.41511 150.701 4.18249C149.457 3.81183 148.485 2.8394 148.114 1.59627C147.882 0.815985 147.665 0.0885006 147.665 0.0885006Z"
                                fill="#E3AAFF" data-v-5ec99945=""></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M135.284 0.0885006C135.268 0.0361379 135.22 0 135.165 0C135.111 0 135.062 0.0361379 135.047 0.0885006C135.047 0.0885006 134.83 0.815985 134.597 1.59627C134.226 2.8394 133.254 3.81183 132.011 4.18249C131.231 4.41511 130.503 4.63214 130.503 4.63214C130.451 4.64772 130.415 4.69598 130.415 4.75072C130.415 4.80546 130.451 4.85372 130.503 4.8693C130.503 4.8693 131.231 5.08633 132.011 5.31895C133.254 5.68961 134.226 6.66205 134.597 7.90517C134.83 8.68545 135.047 9.41294 135.047 9.41294C135.062 9.46531 135.111 9.50144 135.165 9.50144C135.22 9.50144 135.268 9.46531 135.284 9.41294C135.284 9.41294 135.501 8.68545 135.734 7.90517C136.104 6.66205 137.077 5.68961 138.32 5.31895C139.1 5.08633 139.828 4.8693 139.828 4.8693C139.88 4.85372 139.916 4.80546 139.916 4.75072C139.916 4.69598 139.88 4.64772 139.828 4.63214C139.828 4.63214 139.1 4.41511 138.32 4.18249C137.077 3.81183 136.104 2.8394 135.734 1.59627C135.501 0.815985 135.284 0.0885006 135.284 0.0885006Z"
                                fill="#E3AAFF" data-v-5ec99945=""></path>
                            <path d="M129.554 4.60645H-8.24332e-05" stroke="url(#paint1_linear_13651_24205)"
                                data-v-5ec99945="">
                            </path>
                            <defs data-v-5ec99945="">
                                <linearGradient id="paint0_linear_13651_24205" x1="212.488" y1="7.10613" x2="310.949"
                                    y2="7.10614" gradientUnits="userSpaceOnUse" data-v-5ec99945="">
                                    <stop stop-color="#E3AAFF" data-v-5ec99945=""></stop>
                                    <stop offset="1" stop-color="white" data-v-5ec99945=""></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_13651_24205" x1="119.189" y1="7.10613" x2="20.7285"
                                    y2="7.10614" gradientUnits="userSpaceOnUse" data-v-5ec99945="">
                                    <stop stop-color="#E3AAFF" data-v-5ec99945=""></stop>
                                    <stop offset="1" stop-color="white" data-v-5ec99945=""></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div class="w-full flex justify-center mt-5">
                        <h1 class="text-lg font-bold text-center w-[250px] text-[#403D50]">Đăng ký trải nghiệm miễn phí
                            tại Nex</h1>
                    </div>
                    <div class="mt-5">
                        <form @submit.prevent="submitForm" class="w-full space-y-5">
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
                                    <input v-model="form.password" placeholder="Vui lòng nhập mật khẩu"
                                        class="w-full outline-none" @blur="validatePassword" />

                                </div>
                                <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
                            </div>

                            <div class="space-y-3">
                                <button type="submit"
                                    class="w-full bg-primary hover:bg-purple-800 text-white py-3 rounded-full font-semibold">
                                    Đăng nhập
                                </button>

                                <!-- <button to="/register"
                                class="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-full font-semibold">
                                Đăng ký
                            </button> -->
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>

        <div class="relative w-1/2 h-screen hidden md:block">
            <!-- Hình ảnh nền -->
            <img src="https://nex-now.com/images/login/login-banner.jpg" class="w-full h-full object-cover" />

            <!-- Lớp phủ mờ có "lỗ" tròn ở giữa -->
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <mask id="circle-mask">
                        <!-- Vùng trắng: phần bị phủ -->
                        <rect width="w-[100%]" height="h-[100%]" fill="white" />
                        <!-- Vùng đen: phần hiển thị rõ -->
                        <circle cx="256" cy="256" r="180" fill="black" />
                    </mask>
                </defs>
                <!-- Hình chữ nhật phủ trắng mờ dùng mask -->
                <rect width="512" height="512" fill="white" fill-opacity="0.6" mask="url(#circle-mask)" />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '../store/authStore'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue'

const router = useRouter()
const auth = useAuthStore()
const toast = useToast()

const form = reactive({
    email: '',
    password: ''
})

const errors = reactive({
    email: '',
    password: '',
})

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

function hasValidationErrors() {
    return Object.values(errors).some(Boolean);
}

const submitForm = async () => {
    validateEmail()
    validatePassword()

    if (hasValidationErrors()) {
        return;
    }

    try {
        const response = await auth.login(form);

        if (response) {
            toast.add({
                severity: 'success',
                summary: 'Thành công',
                detail: 'Đăng nhập thành công!',
                life: 3000,
            });
            router.push('/');
        } else {
            toast.add({
                severity: 'error',
                summary: 'Lỗi',
                detail: auth.error,
                life: 4000,
            });
        }
    } catch (err) {
        toast.add({
            severity: 'error',
            summary: 'Lỗi kết nối',
            detail: 'Không thể kết nối tới máy chủ',
            life: 4000,
        });
    }
}

function goBack() {
    window.history.back()
}

</script>