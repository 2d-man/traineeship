<script setup lang="ts" generic="T extends object">
import { ref } from 'vue'

export interface Props {
  modelValue: boolean
}

// CONSTANTS
const prop = defineProps<Props>()
const emit = defineEmits<{
  click: []
  'update:modelValue': [ boolean ]
}>()
const switchLabel = ref('Показать поле ввода')

// METHODS
function toggleTextVisible() {
  if (switchLabel.value === 'Показать поле ввода')
    switchLabel.value = 'Скрыть поле ввода'
  else switchLabel.value = 'Показать поле ввода'
}
</script>

<template>
  <button>
    <input id="checkbox" type="checkbox" @click="toggleTextVisible">
    <label for="checkbox"> {{ switchLabel }} </label>
  </button>
</template>
