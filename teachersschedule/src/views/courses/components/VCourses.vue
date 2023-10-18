<script setup lang="ts" generic="T extends object">
import type { ICourse } from '../../../data/scheduleCourses.ts'

export interface Props {
  courses: Record<number, Array<ICourse>>
  name: string
  /// search: string
  // id: number
}

defineProps<Props>()
</script>

<template>
  <div>
    <ul class="p-1 min-w-full">
      <li
        v-for="(course, courseIndex) in courses"
        :key="courseIndex" class="w-full hover:bg-gray-100 cursor-pointer focus:text-amber-500 border-2 border-b-0 rounded last:border-b-2 border-amber-600"
      >
        {{ course[name] }}
      </li>
    </ul>
  </div>
</template>
