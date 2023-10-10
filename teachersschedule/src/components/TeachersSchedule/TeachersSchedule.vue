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
import type { IUser } from '@/types/user.ts'
import { getUsers, patchUser, postUser } from '@/api/user'

// VARIABLES
const search = ref('')
const visible = ref(false)
const parallels = ref <Array<IParallel>>()
const selectedParallel = ref <IParallel>()
const courses = ref <Record<number, Array<ICourse>>>(scheduleCourses)
const parallelID = ref(0)
const name = ref <string>('fullName')
const users = ref<IUser[]>(await getUsers())

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
  parallelID.value = parallel.id
  courses.value = scheduleCourses[parallelID.value]
  //   courses.map(e => e.key === id.value)
  console.warn(parallelID.value)
  console.warn(courses.value)
}

async function createNewUser() {
  const newUser = await postUser({ email: '123@mail.ru', name: '123', isCringe: false })
  users.value.push(newUser)
}

async function updateUser() {
  const updatedUser = await patchUser(users.value[0].id, { email: '123@mail.ru', name: '123', isCringe: false })
  const indexOfUpdatedUser = users.value.findIndex(u => u.id === updatedUser.id)
  users.value[indexOfUpdatedUser] = updatedUser
}
</script>

<template>
  <div class="flex">
    <pre>{{ users }}</pre>
    <div class="flex flex-col min-w-1/3">
      <div class="form-description mb-5">
        <b>Выбор класса:</b>
      </div>
      <button @click="createNewUser">
        Добавить пользователя
      </button>
      <button @click="updateUser">
        Обновить пользователя
      </button>
      <div class="max-w-xs flex flex-wrap justify-center mb-5 gap-x-2">
        <VButton
          v-for="classNumber in 12"
          :key="classNumber" class="last:invisible" :label="classNumber"
          @click="onClassButtonClick(classNumber - 1)"
        />
      </div>

      <div
        v-if="parallels && selectedParallel"
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
      <transition enter-active-class="transition ease-out duration-1000" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <div v-if="selectedParallel">
          <VCourses :courses="courses" :name="name" />
        </div>
        <p v-else>
          Пожалуйста, выберите параллель.
        </p>
      </transition>
    </div>

    <div />
  </div>
</template>
