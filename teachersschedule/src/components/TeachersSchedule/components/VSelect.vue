<script setup lang="ts" generic="T extends object">
import { ref, watch } from 'vue'

export interface Props {
  modelValue: T
  options: Array<T>
  labelKey: keyof T
}

const prop = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [ value: object ]
}>()

// VARIABLES
const isOpen = ref(false)
const value = ref(prop.modelValue)

// METHODS
function onOptionClick(option: object) {
  value.value = option
  isOpen.value = false
}

function onOpenSelectButtonClick() {
  isOpen.value = !isOpen.value
}

// WATCHERS
watch(value, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <div class="">
    <div class="">
      <button @click="onOpenSelectButtonClick">
        Нажми на меня
      </button>
    </div>
    <div v-if="isOpen" class="">
      <ul>
        <li
          v-for="(option, optionIndex) in options" :key="optionIndex"
          @click="onOptionClick(option)"
        >
          {{ option[labelKey] }}
        </li>
      </ul>
    </div>
  </div>
</template>
