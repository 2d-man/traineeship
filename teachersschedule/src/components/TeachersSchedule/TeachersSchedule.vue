<script setup lang="ts">
import { ref } from 'vue'
import VButton from './components/VButton.vue'
import VInput from './components/VInput.vue'
import VParallelsList from './components/VParallelsList.vue'
import VCheckbox from './components/VCheckbox.vue'
import { parallelSchedule } from './components/IParallelSchedule.ts'
import type { ITimezone } from './components/IParallelSchedule.ts'

// VARIABLES
const search = ref('')
const visible = ref(false)
const selectedParallel = ref <Array<ITimezone>>()

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
</script>

<template>
  <div class="w-[30%] block">
    <div class="flex flex-col min-w-1/3">
      <div class="form-description mb-5">
        <b>Выбор класса:</b>
      </div>

      <div class="max-w-full flex grow flex-wrap justify-center mb-5 gap-x-2">
        <VButton
          v-for="classNumber in 12"
          :key="classNumber" class="last:invisible" :label="classNumber"
          @click="onClassButtonClick(classNumber - 1)"
        />
      </div>

      <div
        v-if="selectedParallel"
        class="max-w-full flex grow flex-wrap justify-center mb-5"
      >
        <VParallelsList v-model="selectedParallel" label-key="name" @log="log" />
      </div>

      <div class="max-w-full flex grow flex-wrap justify-center mb-5">
        <VCheckbox v-model="visible" />
      </div>

      <div class="max-w-full flex grow flex-wrap justify-center mb-5">
        <VInput v-if="visible" v-model="search" :disable="visible" />
      </div>
    </div>
    <div />
  </div>
</template>
