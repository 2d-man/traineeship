<script setup lang="ts">
import { useRouter } from 'vue-router'
import VButton from '../components/VButton.vue'

// VARIABLES
const router = useRouter()

// METHODS
function goToCourses() {
  router.push({ name: 'courses' })
}
function goToUsers() {
  router.push({ name: 'users' })
}
</script>

<template>
  <div class="flex flex-col items-center">
    <VButton class="w-[400px]" label="Курсы" @click="goToCourses" />
    <VButton class="w-[400px]" label="Пользователи" @click="goToUsers" />
  </div>
</template>
