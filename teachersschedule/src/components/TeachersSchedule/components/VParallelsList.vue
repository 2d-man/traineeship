<script setup lang="ts" generic="T extends object">
export interface Props {
  modelValue: Array<T> | undefined
  labelKey: string
}

// CONSTANTS
const prop = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [ value: Array<T> ]
  'log': string
}>()

// METHODS
function showGrid(parallel: string) {
  console.warn(parallel)
  // selectedParallel.value = option
}
</script>

<template>
  <div class="border-orange-600 rounded border-2 min-w-full">
    <ul class="p-1">
      <li
        v-for="(timezone, timezoneIndex) in modelValue"
        :key="timezoneIndex" class="p-1 hover:bg-gray-100 cursor-pointer focus:text-amber-500 border-2 border-b-0 rounded last:border-b-2 border-amber-600"
        @click="showGrid(timezone)"
      >
        {{ timezone[labelKey] }}
      </li>
    </ul>
  </div>
</template>
