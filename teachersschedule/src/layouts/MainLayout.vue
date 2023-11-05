<script setup lang="ts">
import { useRoute } from 'vue-router'

// VARIABLES
const route = useRoute()
</script>

<template>
  <div class="flex flex-col gap-y-4 w-screen min-h-screen relative bg-gray-100 p-10">
    <p class="text-3xl font-bold">
      {{ route.meta?.title || 'Нет заголовка' }}
    </p>
    <div class="flex justify-center items-center bg-gray-100">
      <div class="w-full min-h-full flex flex-col gap-y-4 p-10 rounded-2xl shadow bg-purple-600">
        <div class="flex flex-col">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
