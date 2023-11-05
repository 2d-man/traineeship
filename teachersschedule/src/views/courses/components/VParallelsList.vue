<script setup lang="ts" generic="T extends object">
export interface Props {
  modelValue: T | undefined
  options: Array<T> | undefined
  labelKey: string
}

// CONSTANTS
defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [ value: Array<T> ]
  'log': string
}>()

// METHODS
function showGrid(parallel: T) {
  console.warn(parallel)
  emit('update:modelValue', parallel)
}
</script>

<template>
  <div class="border-orange-600 rounded border-2 min-w-full ">
    <ul class="p-1">
      <li
        v-for="(parallel, parallelIndex) in options"
        :key="parallelIndex" class="p-1 bg-gray-100 hover:bg-gray-200 cursor-pointer focus:text-amber-500 border-2 border-b-0 rounded last:border-b-2 border-amber-600"
        @click="showGrid(parallel)"
      >
        {{ parallel[labelKey] }}
      </li>
    </ul>
  </div>
</template>
