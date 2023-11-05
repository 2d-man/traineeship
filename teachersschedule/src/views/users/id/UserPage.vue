<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { deleteUser, getUser, patchUser } from '@/api/user'
import VCard from '@/views/users/components/VCard.vue'
import VButton from '@/components/VButton.vue'
import router from '@/router'
import type { IUser } from '@/types/user.ts'
import { useToastStore } from '@/stores/toast.ts'
import VInput from '@/components/VInput.vue'
import VCheckbox from '@/components/VCheckbox.vue'

export interface Props {
  user: IUser
}

defineProps<Props>()

// VARIABLES
const route = useRoute()
const userId = route.params.userId as string
const user = ref(await getUser(userId))
const visible = ref(false)
const userName = ref(user.value.name)
const userEmail = ref(user.value.email)
const userCringe = ref(user.value.isCringe)
const { create: createToast } = useToastStore()

// METHODS
function openUserChange() {
  visible.value = true
}
async function updateUser(userName: string, userEmail: string, userCringe: boolean) {
  user.value = await patchUser(user.value.id, { email: userEmail, name: userName, isCringe: userCringe })
  createToast({ type: 'info', timer: 3000, label: 'Пользователь изменен' })
  visible.value = false
}

async function deleteSelectedUser(userId: string) {
  await deleteUser(userId)
  createToast({ type: 'error', timer: 3000, label: `Пользователь ${userName.value} удалён` })
  visible.value = false
  comeBack()
}

function comeBack() {
  router.push({ name: 'users' })
}
</script>

<template>
  <div class="flex flex-col items-center w-full grow flex-wrap justify-center mb-5">
    <VCard
      class="hover:clear-none"
      :name="user.name" :is-cringe="user.isCringe" :email="user.email"
    />
    <VButton class="w-[400px]" label="Изменить" @click="openUserChange" />
    <div v-if="visible" class="flex flex-col gap-2 pb-2 w-[400px]">
      <div class="flex gap-2">
        ФИО:
        <VInput v-model="userName" aria-required="true" label="" />
      </div>
      <div class="flex gap-2">
        Почта:
        <VInput v-model="userEmail" label="" />
      </div>
      <div class="flex gap-2">
        Кринге:
        <VCheckbox v-model="userCringe" switch-label="" />
      </div>
    </div>
    <VButton v-if="visible" class="w-[400px]" label="Готово" @click="updateUser(userName, userEmail, userCringe)" />
    <VButton class="w-[400px]" label="Удалить" @click="deleteSelectedUser(userId)" />
    <VButton class="w-[400px]" label="Назад" @click="comeBack" />
  </div>
</template>
