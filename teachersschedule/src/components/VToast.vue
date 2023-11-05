<script setup lang="ts">
import { ref } from 'vue'
import type { IToast, ToastType } from '@/stores/toast.ts'
import { useToastStore } from '@/stores/toast.ts'

export interface Props {
  toast: IToast
}

defineProps<Props>()

// VARIABLES
const colorToast = ref('bg-blue-500')
const cross = ref(false)
const { deleteToast } = useToastStore()

// METHODS
function setColorToast(ToastTypeForColor: ToastType) {
  if (ToastTypeForColor === 'alarm')
    colorToast.value = 'bg-yellow-500'
  if (ToastTypeForColor === 'error')
    colorToast.value = 'bg-red-500'
  if (ToastTypeForColor === 'success')
    colorToast.value = 'bg-green-500'
  if (ToastTypeForColor === 'info')
    colorToast.value = 'bg-blue-500'
  return colorToast.value
}

function setCrossButton(timerToast: number) {
  if (timerToast > 1000)
    cross.value = true
  return cross.value
}
</script>

<template>
  <transition enter-active-class="transition ease-out duration-1000" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
    <div v-if="toast" class="flex relative ">
      <div
        class="block min-w-60 mb-2 px-4 py-1 m-1 text-white duration-150 rounded"
        :class="setColorToast(toast.type)"
      >
        {{ toast.label }}
      </div>

      <div
        class="w-[20px] max-h-[20px] m-1.5 absolute right-0 top-0 rounded"
        @click="deleteToast(toast.id)"
      >
        <svg v-if="setCrossButton(toast.timer)" fill="#FFFFFF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" /></svg>
      </div>
    </div>
  </transition>
</template>
