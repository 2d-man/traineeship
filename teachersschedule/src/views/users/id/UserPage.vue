<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { getUsers, patchUser, postUser } from '@/api/user'
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

async function createNewUser() {
  const newUser = await postUser({ email: '123@mail.ru', name: '123', isCringe: false })
  users.value.push(newUser)
}

async function updateUser() {
  const updatedUser = await patchUser(users.value[0].id, { email: '123@mail.ru', name: '123', isCringe: false })
  const indexOfUpdatedUser = users.value.findIndex(u => u.id === updatedUser.id)
  users.value[indexOfUpdatedUser] = updatedUser
}

function comeBack() {
  router.push({ name: 'main' })
}
</script>

<template>
  <div>
    <VButton class="w-full" label="Добавить пользователя" @click="createNewUser" />
    <VButton class="w-full" label="Обновить пользователя" @click="updateUser" />
    <VButton class="w-full" label="Назад" @click="comeBack" />
    <div>
      <div class="flex w-full grow flex-wrap justify-center mb-5 border-2">
        <VCard v-for="user in users" :key="user" :name="user.name" :is-cringe="user.isCringe" :email="user.email" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
