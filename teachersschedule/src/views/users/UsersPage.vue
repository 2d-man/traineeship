<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { getUsers } from '@/api/user'
import type { IUser } from '@/types/user.js'
import VButton from '@/components/VButton.vue'
import VCard from '@/views/users/components/VCard.vue'
import router from '@/router'

// VARIABLES
const users = ref<IUser[]>(await getUsers())
const route = useRoute()
const a = ref({
  value: 123,
})

function openUser(userId: string) {
  console.warn(userId)
  router.push({ name: 'user', params: { userId } })
}

function createNewUser() {
  router.push({ name: 'userCreate' })
}

function comeBack() {
  router.push({ name: 'main' })
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center">
      <VButton class="w-[400px]" label="Добавить пользователя" @click="createNewUser" />
      <VButton class="w-[400px]" label="Назад" @click="comeBack" />
    </div>

    <div class="flex flex-wrap justify-center">
      <VCard
        v-for="user in users" :key="user" :name="user.name" :is-cringe="user.isCringe" :email="user.email"
        @click="openUser(user.id)"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
