<script setup lang="ts">
import VButton from './components/VButton.vue'
import VInput from './components/VInput.vue'
import VSelect from './components/VSelect.vue'
import {ref} from "vue";

// export interface Props {
//   btn : string;
//   parallels : string;
// }

interface Parallel {
  'text': string;
  'id': number;
}

// VARIABLES
const search = ref('')
const parallels = ref<Array<Parallel>>([])
const selectedParallel = ref<Parallel>()

// METHODS
function onGradeButtonClick(grade: number) {
  parallels.value = getParallelsByGrade(grade)
}

function getParallelsByGrade(grade: number): Array<Parallel> {
  console.warn('getParallelsByGrade', grade)
  // TODO: create get parallels by grade method
  return [
    {
      text: '8:00 (Математика М.И.Моро)',
      id : 168
    },
    {
      text: '8:00 Стандарт (Математика М.И.Моро)',
      id : 169
    },
    {
      text: '10:00 (Математика М.И.Моро)',
      id : 170
    },
    {
      text: '10:00 Стандарт (Математика М.И.Моро)',
      id : 171
    },
    {
      text: '8:00 (Математика Л.Г.Петерсон)',
      id : 221
    },
    {
      text: '8:00 Стандарт (Математика Л.Г.Петерсон)',
      id : 218
    },
    {
      text: '10:00 (Математика Л.Г.Петерсон)',
      id : 224
    },
    {
      text: '10:00 Стандарт (Математика Л.Г.Петерсон)',
      id : 222
    },
    {
      text: 'Ускоренная 1–2 классы за год',
      id : 178
    },
    {
      text: 'Программа Эльконина-Давыдова. Стандарт',
      id : 181
    }
  ]
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
          v-for="grade in 11" :key="grade"
          :label="grade"
          @click="onGradeButtonClick(grade)"
        />
      </div>

      <div
          v-if="parallels.length"
          class="max-w-full flex grow flex-wrap justify-center mb-5"
      >
        <VSelect
          v-model="selectedParallel"
          :options="parallels"
          label-key="text"
        />

      </div>

      <div class="max-w-full flex grow flex-wrap justify-center mb-5">
          <VInput />
<!--   Это тест, так делать не правильно     -->
<!--        <VInput-->
<!--            :search="search"-->
<!--            @update:search="search = $event"-->
<!--        />-->
        <p>{{search}}</p>
      </div>
    </div>
  </div>
</template>
