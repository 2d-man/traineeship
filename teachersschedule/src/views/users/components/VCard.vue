<script setup lang="ts">
export interface Props {
  name: string
  email: string
  isCringe: boolean
}

defineProps<Props>()
</script>

<template>
  <div
    class="block min-w-20 mb-2 px-4 py-1 m-1 rounded bg-orange-600 text-white duration-150 focus:bg-orange-700 hover:bg-red-600"
  >
    <div>
      Имя: {{ name }}
    </div>
    <div>
      Почта: {{ email }}
    </div>
    <div>
      Кринге: {{ isCringe }}
    </div>
  </div>
</template>
