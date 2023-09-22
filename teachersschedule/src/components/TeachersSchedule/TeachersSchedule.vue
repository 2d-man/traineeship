<script setup lang="ts">
import { ref } from 'vue'
import VButton from './components/VButton.vue'
import VInput from './components/VInput.vue'
import VSelect from './components/VSelect.vue'
import VCheckbox from './components/VCheckbox.vue'

// CONSTANTS
interface IParallel {
  text: string
  id: number
}
interface IParallelClass {
  classNumber: number
  grid: Array<IParallel>
}
interface IGrids {
  grids: Array<IParallelClass>
}
const schedule: IGrids = {
  grids: [
    {
      classNumber: 1,
      grid: [{ text: '8:00 (Математика М.И.Моро)', id: 168 },
        { text: '8:00 Стандарт (Математика М.И.Моро)', id: 169 },
        { text: '10:00 (Математика М.И.Моро)', id: 170 },
        { text: '10:00 Стандарт (Математика М.И.Моро)', id: 171 },
        { text: '8:00 (Математика Л.Г.Петерсон)', id: 221 },
        { text: '8:00 Стандарт (Математика Л.Г.Петерсон)', id: 218 },
        { text: '10:00 (Математика Л.Г.Петерсон)', id: 224 },
        { text: '10:00 Стандарт (Математика Л.Г.Петерсон)', id: 222 },
        { text: 'Ускоренная 1–2 классы за год', id: 178 },
        { text: 'Программа Эльконина-Давыдова. Стандарт', id: 181 }],
    },
    {
      classNumber: 2,
      grid: [{ text: '8:00 (Математика М.И.Моро)', id: 182 },
        { text: '8:00 Стандарт (Математика М.И.Моро)', id: 183 },
        { text: '10:00 (Математика М.И.Моро)', id: 184 },
        { text: '10:00 Стандарт (Математика М.И.Моро)', id: 185 },
        { text: 'Развивающая программа Эльконина-Давыдова. Стандарт', id: 186 },
        { text: '8:00 Стандарт (Математика Л.Г.Петерсон)', id: 227 },
        { text: '8:00 (Математика Л.Г.Петерсон)', id: 229 },
        { text: '10:00 Стандарт (Математика Л.Г.Петерсон)', id: 231 },
        { text: '10:00 (Математика Л.Г.Петерсон)', id: 234 }],
    },
    {
      classNumber: 3,
      grid: [{ text: '8:00 (Математика М.И.Моро)', id: 187 },
        { text: '8:00 Стандарт (Математика М.И.Моро)', id: 190 },
        { text: '10:00 (Математика М.И.Моро)', id: 191 },
        { text: '10:00 Стандарт (Математика М.И.Моро)', id: 194 },
        { text: 'Развивающая программа Эльконина-Давыдова', id: 199 },
        { text: 'Развивающая программа Эльконина-Давыдова. Стандарт', id: 200 },
        { text: '8:00 Стандарт (Математика Л.Г.Петерсон)', id: 237 },
        { text: '8:00 (Математика Л.Г.Петерсон)', id: 238 },
        { text: '10:00 Стандарт (Математика Л.Г.Петерсон)', id: 240 },
        { text: '10:00 (Математика Л.Г.Петерсон)', id: 245 }],
    },
    {
      classNumber: 4,
      grid: [{ text: '8:00 (Математика М.И.Моро)', id: 201 },
        { text: '8:00 Стандарт (Математика М.И.Моро)', id: 202 },
        { text: '10:00 (Математика М.И.Моро)', id: 203 },
        { text: '10:00 Стандарт (Математика М.И.Моро)', id: 204 },
        { text: 'Развивающая программа Эльконина-Давыдова', id: 206 },
        { text: 'Развивающая программа Эльконина-Давыдова. Стандарт', id: 208 },
        { text: '8:00 Стандарт (Л.Г.Петерсон)', id: 246 },
        { text: '8:00 (Л.Г.Петерсон)', id: 247 },
        { text: '10:00 Стандарт (Л.Г.Петерсон)', id: 250 },
        { text: '10:00 (Л.Г.Петерсон)', id: 254 }],
    },
    {
      classNumber: 5,
      grid: [{ text: '8:00 (Математика А.Г.Мерзляк)', id: 172 },
        { text: '8:00 Стандарт (Математика А.Г.Мерзляк)', id: 173 },
        { text: '10:00 (Математика А.Г.Мерзляк)', id: 174 },
        { text: '10:00 Стандарт (Математика А.Г.Мерзляк)', id: 175 },
        { text: '10:00 Стандарт (Математика Л.Г.Петерсон)', id: 259 },
        { text: '10:00 (Математика Л.Г.Петерсон)', id: 262 },
        { text: '8:00 (Математика. Л.Г. Петерсон)', id: 300 },
        { text: '8:00 Стандарт (Математика. Л.Г. Петерсон)', id: 301 }],
    },
    {
      classNumber: 6,
      grid: [{ text: '8:00 (Математика А.Г.Мерзляк)', id: 176 },
        { text: '8:00 Стандарт (Математика А.Г.Мерзляк)', id: 177 },
        { text: '10:00 (Математика А.Г.Мерзляк)', id: 179 },
        { text: '10:00 Стандарт (Математика А.Г.Мерзляк)', id: 180 },
        { text: '10:00 Стандарт (Математика Л.Г.Петерсон)', id: 272 },
        { text: '10:00 (Математика Л.Г.Петерсон)', id: 274 },
        { text: '8:00 (Математика. Л.Г. Петерсон)', id: 302 },
        { text: '8:00 Стандарт (Математика. Л.Г. Петерсон)', id: 303 }],
    },
    {
      classNumber: 7,
      grid: [{ text: '8:00 (Математика А.Г.Мерзляк)', id: 188 },
        { text: '8:00 Стандарт (Математика А.Г.Мерзляк)', id: 189 },
        { text: '10:00 (Математика А.Г.Мерзляк)', id: 192 },
        { text: '10:00 Стандарт (Математика А.Г.Мерзляк)', id: 193 },
        { text: '10:00 Стандарт (Математика Л.Г.Петерсон)', id: 277 },
        { text: '10:00 (Математика Л.Г.Петерсон)', id: 282 },
        { text: '8:00 (Математика. Л.Г. Петерсон)', id: 304 },
        { text: '8:00 Стандарт (Математика. Л.Г. Петерсон)', id: 305 }],
    },
    {
      classNumber: 8,
      grid: [{ text: '8:00', id: 195 },
        { text: '8:00 Стандарт', id: 196 },
        { text: '10:00', id: 197 },
        { text: '10:00 Стандарт', id: 198 }],
    },
    {
      classNumber: 9,
      grid: [{ text: '8:00', id: 205 },
        { text: '8:00 Стандарт', id: 207 },
        { text: '10:00', id: 209 },
        { text: '10:00 Стандарт', id: 211 }],
    },
    {
      classNumber: 10,
      grid: [{ text: '8:00 (Математика. Авторский курс)', id: 212 },
        { text: '8:00 Стандарт (Математика. Авторский курс)', id: 213 },
        { text: '10:00 (Математика. Базовый курс)', id: 215 },
        { text: '10:00 Стандарт (Математика. Базовый курс)', id: 216 },
        { text: '10:00 (Математика. Авторский курс)', id: 306 },
        { text: '10:00 Стандарт (Математика. Авторский курс)', id: 307 }],
    },
    {
      classNumber: 11,
      grid: [{ text: '10:00 (Математика. Базовый курс)', id: 210 },
        { text: '10:00 Стандарт (Математика. Базовый курс)', id: 214 },
        { text: '10:00 Стандарт (Математика. Авторский курс)', id: 288 },
        { text: '10:00 (Математика. Авторский курс)', id: 290 }],
    }],
}

// VARIABLES
const search = ref('')
const visible = ref(true)
const parallels = ref <Array<IParallel>>()
let disable: boolean

// METHODS
function onGradeButtonClick(grade: number) {
  parallels.value = getParallelsByGrade(grade)
}
function log(value: any) {
  console.warn(value)
}
function getParallelsByGrade(grade: number): Array<IParallel> {
  console.warn('getParallelsByGrade', grade)
  return schedule.grids[grade - 1].grid
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
        <VButton v-for="grade in 11" :key="grade" :label="grade" @click="onGradeButtonClick(grade)" />
      </div>

      <div
        v-if="parallels"
        class="max-w-full flex grow flex-wrap justify-center mb-5"
      >
        <VSelect v-model="log" :options="parallels" label-key="text" />
      </div>

      <div class="max-w-full flex grow flex-wrap justify-center mb-5">
        <VInput v-if="!disable && visible" v-model:search="search" :disable="disable" />
      </div>

      <div class="max-w-full flex grow flex-wrap justify-center mb-5">
        <VCheckbox :visible="visible" @change="toggleVisible" />
      </div>
    </div>
  </div>
</template>
