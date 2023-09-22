<script setup lang="ts" generic="T extends object">
import { ref, watch } from 'vue'

export interface Props {
  options: Array<T>
  labelKey: keyof T
}

const prop = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [ value: T ]
}>()

// VARIABLES
const isOpen = ref(false)
const selectedParallel = ref(prop.modelValue)

// METHODS
function onOptionClick(option: object) {
  selectedParallel.value = option
}

// WATCHERS
watch(selectedParallel, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <div class="">
    <ul>
      <li
        v-for="(option, optionIndex) in options"
        :key="optionIndex" class="hover:bg-red-200 cursor-pointer"
        @click="onOptionClick(option)"
      >
        {{ option[labelKey] }}
      </li>
    </ul>
  </div>
</template>
