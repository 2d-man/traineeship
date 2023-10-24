import { defineStore } from 'pinia'
import { ref } from 'vue'

export type ToastType = 'alarm' | 'error' | 'success' | 'info'
export interface IToastOptions {
  type: ToastType
  label: string
  timer: number
}

export interface IToast {
  id: string
  type: ToastType
  label: string
  timer: number
  canClose?: boolean
}

export const useToastStore = defineStore('toast', () => {
  const toasts = ref < Array<IToast>>([])
  // METHODS
  function create(options: IToastOptions): void {
    const newToast: IToast = { ...options, id: new Date().toISOString() }
    toasts.value.push(newToast)
    newToast.timer >= 20000 ? newToast.canClose = true : newToast.canClose = false

    removeToastOnTimerExpired(newToast.id, newToast.timer)
  }

  function deleteToast(toastId: string): void {
    toasts.value = toasts.value.filter((el: IToast) => el.id !== toastId)
  }

  function removeToastOnTimerExpired(toastId: string, toastTimer: number): void {
    setTimeout(() => {
      toasts.value = toasts.value.filter((el: IToast) => el.id !== toastId)
    }, toastTimer)
  }

  return { toasts, create, deleteToast }
})
