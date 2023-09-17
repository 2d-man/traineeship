<script setup lang="ts">

import TeachersSchedule from './components/TeachersSchedule/TeachersSchedule.vue'


</script>

<template>
  <div class="w-screen h-screen flex  justify-center items-center bg-gray-100">
    <div class="flex flex-col max-w-4xl gap-y-4 p-10 h-fit w-full bg-white rounded-2xl shadow">
      <p class="font-bold text-3xl">
        Занятие №1
      </p>
      <hr>
      <div class="flex flex-col">
        <TeachersSchedule />
      </div>
    </div>
  </div>
</template>
