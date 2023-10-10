// Пишем запросы тут

import { mockInstance } from '../instance'
import type { IUser } from '../../types/user.ts'

export interface GetUsersQueryParams {
  isCringe?: true
}

// Получение
// Когда у гет запроса есть параметры, то мы сразу понимаем, что речь идет про фильтрацию
export async function getUsers(queryParams?: GetUsersQueryParams): Promise<Array<IUser>> {
  const { data } = await mockInstance.get<Array<IUser>>('/users', { params: queryParams })
  return data
}

export interface PostUserRequestData {
  name: string
  email: string
  isCringe: boolean
}

// Создание
export async function postUser(requestData: PostUserRequestData): Promise<IUser> {
  const { data } = await mockInstance.post<IUser>('/users', requestData)
  return data
}

// animals = getAnimals()
// filteredAnimals = getAnimals({ age: 15 })

// const animals = []
// animals = getAnimals()
// пользователь набирает что-то на фронте
// const newAnimal = createAnimal({ name: string, age: number, color: string })
// animals.push(newAnimal)

// const animals = []
// animals = getAnimals()
// пользователь набирает что-то на фронте
// const updatedAnimal = updateAnimal(animalId: number, { name: string, age: number, color: string })
// const indexOfUpdatedAnimal = animals.findIndex(animal => animal.id === animalId)
// animals[indexOfUpdatedAnimal] = updatedAnimal

export interface PatchUserRequestData {
  name: string
  email: string
  isCringe: boolean
}

// Изменение
export async function patchUser(userId: string, requestData: PatchUserRequestData): Promise<IUser> {
  const { data } = await mockInstance.patch<IUser>(`/users/${userId}`, requestData)
  return data
}
