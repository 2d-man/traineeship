interface Prepod {
  id: number
  fullName: string
}

interface CourseType {
  id: number
  name: string
}

// Для компонента
export interface ICoursesFilter {
  search: string
  prepod: Prepod[]
  type: CourseType[]
  isAsynchronous: boolean
}

// Для будущего запроса в бек
export interface IQueryParams {
  search: string
  prepodIds: number[]
  typeIds: number[]
  isAsynchronous: boolean
}
