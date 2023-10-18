<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'

// VARIABLES
const route = useRoute()
const router = useRouter()

// HOOK
router.afterEach((to) => {
  document.title = to.meta?.title || 'Не найдено'
})
</script>

<template>
  <Suspense>
    <template #default>
      <RouterView v-slot="{ Component: View }">
        <component :is="route.meta?.layout ?? MainLayout">
          <template v-if="View">
            <component :is="View" />
          </template>
        </component>
      </RouterView>
    </template>
    <template #fallback>
      Гружусь...
    </template>
  </Suspense>
</template>
