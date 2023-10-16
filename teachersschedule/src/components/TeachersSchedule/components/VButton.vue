<script setup lang="ts">
export interface Props {
  label: number | string
}

const prop = defineProps<Props>()
const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <button
    class="w-20 max-h-8 mb-2 px-4 py-1 rounded bg-orange-600 text-white duration-150 focus:bg-orange-700 hover:bg-red-600 "
    @mousedown="emit('click')"
    @keydown.enter="emit('click')"
  >
    {{ prop.label }}
  </button>
</template>
