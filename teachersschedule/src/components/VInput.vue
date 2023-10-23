<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Props {
  modelValue: string
  disable: boolean
  label?: string
}
const prop = withDefaults(defineProps<Props>(), {
  disable: false,
  label: 'Найти...',
})

const emit = defineEmits<{
  'update:modelValue': [ value: string ]
}>()

const text = ref(prop.modelValue)

watch(text, () => emit('update:modelValue', text))
</script>

<template>
  <input
    v-model="text"
    :placeholder="label"
    class="w-full flex grow border border-indigo-500 h-[32px] bg-gray-100 border-0 rounded p-2"
  >
</template>
