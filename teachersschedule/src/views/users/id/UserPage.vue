<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { getUser } from '@/api/user'
import VCard from '@/views/users/components/VCard.vue'

export interface Props {
  name: string
  email: string
  isCringe: boolean
}

defineProps<Props>()

// VARIABLES
const route = useRoute()
const userId = route.params.userId as string
const user = ref(await getUser(userId))
</script>

<template>
  <div class="flex w-full grow flex-wrap justify-center mb-5 border-2">
    <VCard
      :name="user.name" :is-cringe="user.isCringe" :email="user.email"
    />
  </div>
</template>
