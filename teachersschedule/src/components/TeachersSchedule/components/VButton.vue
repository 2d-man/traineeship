<script setup lang="ts">
export interface Props {
  label: number;
}

const prop = defineProps<Props>()
const emit = defineEmits<{
  click: [];
}>()

</script>

<template>
  <button class="bg-indigo-500 px-4 py-1 rounded text-white hover:bg-red-600 duration-150"
    @mousedown="emit('click')"
    @keydown.enter="emit('click')">
    {{ prop.label }}
  </button>
</template>