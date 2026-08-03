<script setup lang="ts">
import { ref, computed } from 'vue'
import type { loginForm } from '@/types'
import { getCsrfCookie, webRoute } from '@/axios'


const isSubmitting = ref(false)
const errorMessage = ref('')
const passwordInput = ref('')

// Password strength requirement checks
const hasMinLength = computed(() => passwordInput.value.length >= 5)
const hasNumber = computed(() => /\d/.test(passwordInput.value))
const hasUppercase = computed(() => /[A-Z]/.test(passwordInput.value))
const hasSpecialChar = computed(() => /[^A-Za-z0-9]/.test(passwordInput.value))

const handleLogin = async (formData: loginForm) => {
  isSubmitting.value = true
  errorMessage.value = ''
  

  try {
    await getCsrfCookie() // Ensure CSRF cookie is set before login
    const response = await webRoute.post('/login', formData)
  } catch (error: any) {
    console.error('Login failed:', error)
    errorMessage.value = error.response?.data?.message || 'An error occurred during login.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8 font-sans">

    <!-- Top Main Title Header -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-extrabold text-blue-600 tracking-tight mb-2">
        Sign In
      </h1>
      <p class="text-slate-500 text-sm md:text-base">
        Access the RP Corporate ERP system.
      </p>
    </div>

    <!-- Main Dual Card Container -->
    <div class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

      <!-- LEFT CARD: Branding & Features -->
      <div class="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm flex flex-col justify-between">
        <div>
          <h2 class="text-2xl font-bold text-slate-900 mb-1">
            RP corporate
          </h2>
          <p class="text-slate-500 text-sm mb-8">
            The modern platform for RP Corporate.
          </p>

          <!-- 2x2 Feature Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <!-- Feature 1: Operations -->
            <div class="p-5 rounded-2xl border border-slate-100 bg-white shadow-2xs space-y-3">
              <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <!-- User Icon -->
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-slate-800 text-sm">Manage Daily operations</h3>
                <p class="text-xs text-slate-400 mt-1">Manage your site efficiently</p>
              </div>
            </div>

            <!-- Feature 2: Secure Platform -->
            <div class="p-5 rounded-2xl border border-slate-100 bg-white shadow-2xs space-y-3">
              <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <!-- Shield Check Icon -->
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-slate-800 text-sm">Secure Platform</h3>
                <p class="text-xs text-slate-400 mt-1">Your data is protected</p>
              </div>
            </div>

            <!-- Feature 3: Mobile Access -->
            <div class="p-5 rounded-2xl border border-slate-100 bg-white shadow-2xs space-y-3">
              <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <!-- Mobile Phone Icon -->
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-slate-800 text-sm">Mobile Access</h3>
                <p class="text-xs text-slate-400 mt-1">Manage on the go</p>
              </div>
            </div>

            <!-- Feature 4: Financial Insights -->
            <div class="p-5 rounded-2xl border border-slate-100 bg-white shadow-2xs space-y-3">
              <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <!-- Trending Up Chart Icon -->
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-slate-800 text-sm">Financial Insights</h3>
                <p class="text-xs text-slate-400 mt-1">Track growth & trends</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- RIGHT CARD: Sign In Form -->
      <div class="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm flex flex-col justify-between">

        <div>
          <h2 class="text-2xl font-bold text-slate-900 mb-1">
            Sign in to your account
          </h2>
          <p class="text-slate-500 text-sm mb-6">
            Enter your credentials below.
          </p>

          <!-- Error Message Alert -->
          <div v-if="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs">
            {{ errorMessage }}
          </div>

          <!-- FormKit Form -->
          <FormKit type="form" :actions="false" @submit="handleLogin">
            <div class="space-y-4">

              <!-- Email Input with Mail Icon -->
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input type="email" required placeholder="you@example.com"
                    class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
                </div>
              </div>

              <!-- Password Input with Lock Icon -->
              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Password</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input v-model="passwordInput" type="password" required placeholder="••••••••"
                    class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
                </div>
              </div>

              <!-- Password Strength Bars -->
              <div class="pt-1">
                <div class="grid grid-cols-4 gap-2 mb-2">
                  <div class="h-1 rounded-full transition-colors"
                    :class="hasMinLength ? 'bg-blue-500' : 'bg-slate-200'"></div>
                  <div class="h-1 rounded-full transition-colors"
                    :class="hasUppercase ? 'bg-blue-500' : 'bg-slate-200'"></div>
                  <div class="h-1 rounded-full transition-colors" :class="hasNumber ? 'bg-blue-500' : 'bg-slate-200'">
                  </div>
                  <div class="h-1 rounded-full transition-colors"
                    :class="hasSpecialChar ? 'bg-blue-500' : 'bg-slate-200'"></div>
                </div>

                <!-- Password Requirements Checklist -->
                <p class="text-[11px] text-slate-400 mb-2">Start typing to check strength</p>
                <div class="grid grid-cols-2 gap-y-1 gap-x-4 text-[11px]">
                  <div class="flex items-center space-x-1.5" :class="hasMinLength ? 'text-blue-600' : 'text-slate-400'">
                    <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
                    <span>At least 5 characters</span>
                  </div>
                  <div class="flex items-center space-x-1.5" :class="hasUppercase ? 'text-blue-600' : 'text-slate-400'">
                    <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
                    <span>One uppercase letter</span>
                  </div>
                  <div class="flex items-center space-x-1.5" :class="hasNumber ? 'text-blue-600' : 'text-slate-400'">
                    <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
                    <span>One number</span>
                  </div>
                  <div class="flex items-center space-x-1.5"
                    :class="hasSpecialChar ? 'text-blue-600' : 'text-slate-400'">
                    <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
                    <span>One special character</span>
                  </div>
                </div>
              </div>

              <!-- Remember Me & Forgot Password Row -->
              <div class="flex items-center justify-between pt-2">
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" class="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                  <span class="ml-2 text-xs font-medium text-slate-600">Remember me</span>
                </label>
                <a href="#" class="text-xs font-semibold text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <!-- Blue Pill Submit Button -->
              <div class="pt-2">
                <button type="submit" :disabled="isSubmitting"
                  class="w-full py-3 px-6 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 disabled:opacity-50">
                  <span v-if="isSubmitting">Signing In...</span>
                  <span v-else>Sign In</span>
                </button>
              </div>

            </div>
          </FormKit>
        </div>

        <!-- Footer Policy Disclaimer -->
        <div class="mt-8 text-center text-xs text-slate-400">
          By signing in, you agree to our
          <a href="#" class="text-blue-600 hover:underline">Terms of Service</a> and
          <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>.
        </div>

      </div>

    </div>
  </div>
</template>