<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Props {
  modelValue: string
  disable: boolean
}
const prop = withDefaults(defineProps<Props>(), {
  disable: false,
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
    class="w-full flex grow border border-indigo-500"
  >
  {{ text }}
</template>
