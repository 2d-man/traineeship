<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { postUser } from '@/api/user'
import router from '@/router'
import VInput from '@/components/VInput.vue'
import VButton from '@/components/VButton.vue'
import { useToastStore } from '@/stores/toast.ts'
import VCheckbox from '@/components/VCheckbox.vue'

// VARIABLES
const route = useRoute()
const name = ref('')
const email = ref('')
const isCringe = ref(false)
const { create: createToast } = useToastStore()

// METHODS
function openUser(userId: string) {
  console.warn(userId)
  router.push({ name: 'user', params: { userId } })
}
async function createNewUser(emailUser: string, nameUser: string, isCringeUser?: boolean | undefined) {
  console.warn(emailUser, nameUser)
  const newUser = await postUser({ email: emailUser, name: nameUser, isCringe: isCringeUser })
  openUser(newUser.id)
  createToast({ type: 'success', timer: 3000, label: 'Пользователь создан' })
}

function newToast() {
  createToast({ type: 'success', timer: 3000, label: 'Пользователь создан' })
}

function comeBack() {
  router.push({ name: 'users' })
}
</script>

<template>
  <div class="flex flex-col items-center gap-2 grow flex-wrap justify-center mb-5">
    <div class="flex flex-col gap-2 pb-2 w-[400px] grow">
      <div class="flex gap-2">
        ФИО:
        <VInput v-model="name" aria-required="true" label="Абобка Абобович Абобов" />
      </div>
      <div class="flex gap-2">
        Почта:
        <VInput v-model="email" label="abobik@cringe.com" />
      </div>
      <div class="flex gap-2">
        Кринге:
        <VCheckbox v-model="isCringe" switch-label="" />
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center">
    <VButton class="w-[400px]" label="Создать" @click="createNewUser(email, name, isCringe)" />
    <VButton class="w-[400px]" label="Назад" @click="comeBack" />
    <VButton class="w-[400px]" label="Уведомление" @click="newToast" />
  </div>
</template>
