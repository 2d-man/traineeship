<script setup lang="ts" generic="T extends object">
import { ref, watch } from 'vue'

export interface Props {
  modelValue: boolean
  switchLabel: string
}

// CONSTANTS
const prop = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [ boolean ]
}>()
const visible = ref(prop.modelValue)

// METHODS
function toggleTextVisible() {
  visible.value = !visible.value
}

// WATCHERS
watch(visible, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <button class=" " @click="toggleTextVisible">
    <div class="flex  ">
      <div class="w-[24px] bg-orange-600 rounded mr-1">
        <svg v-if="visible" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 19.28125 5.28125 L 9 15.5625 L 4.71875 11.28125 L 3.28125 12.71875 L 8.28125 17.71875 L 9 18.40625 L 9.71875 17.71875 L 20.71875 6.71875 Z" /></svg>
      </div>
      {{ switchLabel }}
    </div>
  </button>
</template>
