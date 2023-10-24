// Пишем запросы тут

import { mockInstance } from '../instance'
import type { ICourse } from '../../data/scheduleCourses.ts'

export async function getCourses(queryParams?: number): Promise<Record<number, Array<ICourse>>> {
  const { data } = await mockInstance.get<Record<number, Array<ICourse>>>('/courses', { params: queryParams })
  return data
}

export interface PostUserRequestData {
  name: string
  email: string
  isCringe: boolean
}
