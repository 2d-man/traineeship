<script setup lang="ts">
import { ref } from 'vue'
import VButton from './components/VButton.vue'
import VInput from './components/VInput.vue'
import VSelect from './components/VSelect.vue'
import VCheckbox from './components/VCheckbox.vue'
import { parallelSchedule } from './components/IParallelSchedule.ts'
import type { ITimezone } from './components/IParallelSchedule.ts'

// VARIABLES
const search = ref('')
const visible = ref(true)
const selectedParallel = ref <Array<ITimezone>>()
let disable: boolean

// METHODS
function onClassButtonClick(classNumber: number) {
  selectedParallel.value = getParallelByClassNumber(classNumber)
  console.warn(selectedParallel.value)
}
function log(value: any) {
  console.warn(value)
}
function getParallelByClassNumber(classNumber: number): Array<ITimezone> {
  return parallelSchedule.grid[classNumber].parallel
}
function toggleVisible() {
  console.warn(visible.value)
  visible.value = !visible.value
}

// WATCHERS
</script>

<template>
  <div class="w-full block">
    <div class="flex flex-col min-w-1/3">
      <div class="form-description ">
        <b>Класс:</b>
      </div>

      <div class="max-w-full flex grow flex-wrap justify-center mb-5 gap-x-2">
        <VButton
          v-for="classNumber in 11" :key="classNumber" :label="classNumber"
          @click="onClassButtonClick(classNumber - 1)"
        />
      </div>

      <div
        v-if="selectedParallel"
        class="max-w-full flex grow flex-wrap justify-center mb-5"
      >
        <VSelect v-model="selectedParallel" v-model:update="log" label-key="name" />
      </div>

      <div class="max-w-full flex grow flex-wrap justify-center mb-5">
        <VInput v-if="!visible" v-model="search" :disable="visible" />
        {{ search }}
      </div>

      <div class="max-w-full flex grow flex-wrap justify-center mb-5">
        <VCheckbox v-model="visible" @change="toggleVisible" />
      </div>
    </div>
  </div>
</template>
