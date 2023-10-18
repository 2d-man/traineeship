<script setup lang="ts">
import { ref } from 'vue'
import VButton from '../../components/VButton.vue'
import VInput from '../../components/VInput.vue'
import VCheckbox from '../../components/VCheckbox.vue'
import VParallelsList from '../main/components/VParallelsList.vue'
import VCourses from './components/VCourses.vue'
import type { IParallel } from '@/types/parallel.ts'

// import type { ICourse } from '@/data/scheduleCourses.ts'
import { scheduleParallels } from '@/data/scheduleParallels.ts'
import { getCourses } from '@/api/courses'
import type { ICourse } from '@/data/scheduleCourses.ts'
import router from '@/router'

// VARIABLES
const search = ref('')
const visible = ref(false)
const parallels = ref <Array<IParallel>>()
const selectedParallel = ref <IParallel>()
const parallelID = ref(0)
const name = ref <string>('fullName')
const courses = ref<Record<number, Array<ICourse>>>(await getCourses())
const filteredCourses = ref<Array<ICourse>>()

// METHODS
function onClassButtonClick(classNumber: number) {
  parallels.value = getParallelByClassNumber(classNumber)
  // console.warn(parallels.value)
}

function log(value: any) {
  // console.warn(value)
}

function getParallelByClassNumber(classNumber: number): Array<IParallel> {
  return scheduleParallels.grade[classNumber].parallel
}

async function getCourseByID(parallel: IParallel): Promise<void> {
  filteredCourses.value = courses.value[parallel.id]
  console.warn(filteredCourses.value)
}

function comeBack() {
  router.push({ name: 'main' })
}
</script>

<template>
  <div class="flex">
    <div class="flex flex-col min-w-1/3 mr-2">
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

      <div class="max-w-full flex grow flex-wrap justify-center">
        <VInput v-if="visible" v-model="search" :disable="visible" />
      </div>

      <VButton class="w-full mt-5" label="Назад" @click="comeBack" />
    </div>

    <div class="flex w-full grow flex-wrap justify-center mb-5 border-2">
      <transition enter-active-class="transition ease-out duration-1000" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <div v-if="selectedParallel">
          <VCourses :courses="filteredCourses" :name="name" />
        </div>
        <p v-else>
          Пожалуйста, выберите параллель.
        </p>
      </transition>
    </div>
  </div>
</template>
