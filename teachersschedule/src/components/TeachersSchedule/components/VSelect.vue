<script setup lang="ts">


import {ref, watch} from "vue";

export interface Props {
  modelValue: Record<string, any>;
  options: Array<Record<string, any>>;
  labelKey: string;
}

const prop = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [ value: Record<string, any> ];
}>()

// VARIABLES
const isOpen = ref(false)
const value = ref(prop.modelValue)

// METHODS
function onOptionClick(option: Record<string, any>) {
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
      <button @click="onOpenSelectButtonClick">Нажми на меня</button>
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