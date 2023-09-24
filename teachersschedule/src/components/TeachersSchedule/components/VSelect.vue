<script setup lang="ts" generic="T extends object">
import { ref, watch } from 'vue'

export interface Props {
  modelValue: Array<T> | undefined
  labelKey: keyof T
}

// CONSTANTS
const prop = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [ value: T ]
}>()

// VARIABLES
const selectedTimezone = ref(prop.modelValue)
const name = ref(prop.labelKey)

// METHODS
function onOptionClick(option: Array<T>) {
  selectedTimezone.value = option
}

// WATCHERS
watch(selectedTimezone, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <div class="">
    <ul>
      <li
        v-for="(option, optionIndex) in selectedTimezone"
        :key="optionIndex" class="hover:bg-red-200 cursor-pointer"
        @click="onOptionClick(option)"
      >
        {{ option[labelKey] }}
      </li>
    </ul>
  </div>
</template>
