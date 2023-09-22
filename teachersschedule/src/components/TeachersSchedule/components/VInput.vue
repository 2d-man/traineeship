<script setup lang="ts" generic="T extends object">
export interface Props {
  search: string
  disable: boolean
}
const prop = withDefaults(defineProps<Props>(), {
  disable: false,
})
const emit = defineEmits<{
  click: []
  'update:search': [ value: T ]
}>()
</script>

<template>
  <input
    class="w-full flex grow border border-indigo-500"
    :value="search"
    @input="$emit('update:search', $event.target.value)"
  >
  {{ search }}
</template>
