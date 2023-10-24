<script setup lang="ts">
import { storeToRefs } from 'pinia'
import VToast from '@/components/VToast.vue'
import { useToastStore } from '@/stores/toast.ts'

const toastStore = useToastStore()
const { toasts } = storeToRefs(toastStore)
</script>

<template>
  <div class="w-1/3 bottom-2 right-2 fixed">
    <transition enter-active-class="transition ease-out duration-1000" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <div v-if="toasts.length > 0" class="flex flex-col-reverse align-bottom self-end">
        <VToast
          v-for="(toast, toastIndex) in toasts"
          :key="toastIndex"
          class="flex flex-col-reverse fixed gap-2 "
          :toast="toast"
        />
      </div>
    </transition>
  </div>
</template>
