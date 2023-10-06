<script setup lang="ts">
import TeachersSchedule from '../src/components/TeachersSchedule/TeachersSchedule.vue'
</script>

<template>
  <div class="w-screen min-h-screen flex p-10 justify-center items-center bg-gray-100">
    <div class="w-full min-h-full flex flex-col gap-y-4 p-10  bg-white rounded-2xl shadow">
      <div class="flex flex-col">
        <TeachersSchedule />
      </div>
    </div>
  </div>
</template>
