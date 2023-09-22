<script setup lang="ts" generic="T extends object">
import { ref } from 'vue'

export interface Props {
  visible: boolean
  // disable: boolean
}

const prop = withDefaults(defineProps<Props>(), {
  visible: true,
  // disable: false,
})

const emit = defineEmits<{
  change: []
}>()

const switchLabel = ref('Показать поле ввода')

function toggleTextVisible() {
  if (switchLabel.value === 'Показать поле ввода')
    switchLabel.value = 'Скрыть поле ввода'
  else switchLabel.value = 'Показать поле ввода'
}
</script>

<template>
  <div>
    <input id="checkbox" type="checkbox" @change="toggleTextVisible">
    <label for="checkbox"> {{ switchLabel }} </label>
  </div>
</template>
