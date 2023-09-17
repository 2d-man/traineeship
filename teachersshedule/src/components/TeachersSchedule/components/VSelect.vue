<script setup lang="ts">

const parallels = [
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
];


// export interface Props {
//   grade : number;
// }

// const prop = defineProps<Props>()

</script>

<template>
  <select size="10" class="w-full flex grow border border-indigo-500">
    <option v-for="parallel in parallels">
      {{ parallel.text }}
    </option>

  </select>
</template>