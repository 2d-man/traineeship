<script setup lang="ts">
import { useRouter } from 'vue-router'
import VButton from '../../components/VButton.vue'

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
  <div class="flex justify-center gap-5">
    <VButton class="w-[200px]" label="Курсы" @click="goToCourses" />
    <VButton class="w-[200px]" label="Пользователи" @click="goToUsers" />
  </div>
</template>
