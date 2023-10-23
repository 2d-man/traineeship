<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { postUser } from '@/api/user'
import router from '@/router'
import VInput from '@/components/VInput.vue'
import VButton from '@/components/VButton.vue'

// VARIABLES
const route = useRoute()
const name = ref('')
const email = ref('')
const isCringe = ref(false)

// METHODS
function openUser(userId: string) {
  console.warn(userId)
  router.push({ name: 'user', params: { userId } })
}
async function createNewUser(emailUser: string, nameUser: string, isCringeUser?: boolean | undefined) {
  console.warn(emailUser, nameUser)
  const newUser = await postUser({ email: emailUser, name: nameUser, isCringe: isCringeUser })
  openUser(newUser.id)
}

function comeBack() {
  router.push({ name: 'users' })
}
</script>

<template>
  <div class="flex flex-col gap-2 pb-2">
    ФИО:
    <VInput v-model="name" aria-required="true" label="Абобка Абобович Абобов" />
    Почта:
    <VInput v-model="email" label="abobchik@cringe.com" />
  </div>
  <VButton class="w-full" label="Создать" @click="createNewUser(email, name)" />
  <VButton class="w-full" label="Назад" @click="comeBack" />
</template>
