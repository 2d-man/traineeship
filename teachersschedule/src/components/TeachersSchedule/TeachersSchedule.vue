<script setup lang="ts">
import { ref } from 'vue'
import VButton from './components/VButton.vue'
import VInput from './components/VInput.vue'
import VParallelsList from './components/VParallelsList.vue'
import VCheckbox from './components/VCheckbox.vue'
import { scheduleParallels } from './data/scheduleParallels.ts'
import type { IParallel } from './types/parallel.ts'
import VCourses from './components/VCourses.vue'
import type { ICourse } from './data/scheduleCourses.ts'
import { scheduleCourses } from './data/scheduleCourses.ts'

// VARIABLES
const search = ref('')
const visible = ref(false)
const parallels = ref <Array<IParallel>>()
const selectedParallel = ref <IParallel>()
const selectedCourse = ref <Array<ICourse>>()
const courses = ref <Record<number, Array<ICourse>>>(scheduleCourses)
const id = ref(0)
const name = ref <String>('fullName')

// METHODS
function onClassButtonClick(classNumber: number) {
  parallels.value = getParallelByClassNumber(classNumber)
  console.warn(parallels.value)
}
function log(value: any) {
  console.warn(value)
}
function getParallelByClassNumber(classNumber: number): Array<IParallel> {
  return scheduleParallels.grade[classNumber].parallel
}

function getCourseByID(parallel: IParallel): void {
  id.value = parallel.id
  courses.value = scheduleCourses[id.value]
  //   courses.map(e => e.key === id.value)
  console.warn(id.value)
  console.warn(courses.value)
}
</script>

<template>
  <div class="flex">
    <div class="flex flex-col min-w-1/3">
      <div class="form-description mb-5">
        <b>Выбор класса:</b>
      </div>

      <div class="max-w-xs flex flex-wrap justify-center mb-5 gap-x-2">
        <VButton
          v-for="classNumber in 12"
          :key="classNumber" class="last:invisible" :label="classNumber"
          @click="onClassButtonClick(classNumber - 1)"
        />
      </div>

      <div
        v-if="parallels"
        class="max-w-full flex flex-wrap justify-center mb-5"
      >
        <VParallelsList
          v-model="selectedParallel" :options="parallels" label-key="name"
          @click="getCourseByID(selectedParallel)" @log="log"
        />
      </div>

      <div class="max-w-full flex flex-wrap justify-center mb-5">
        <VCheckbox v-model="visible" switch-label="Показать поле ввода" />
      </div>

      <div class="max-w-full flex grow flex-wrap justify-center mb-5">
        <VInput v-if="visible" v-model="search" :disable="visible" />
      </div>
    </div>

    <div class="flex w-full grow flex-wrap justify-center mb-5 border-2">
      <div v-if="selectedParallel">
        <VCourses v-model="selectedCourse" :courses="courses" :name="name" />
      </div>
    </div>

    <div/>
  </div>
</template>
