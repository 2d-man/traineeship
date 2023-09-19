// number | string | boolean | object | null | undefined | void | never | any | Array | Function | symbol | bigint

import { ref } from 'vue'

type TAbc = 'single' | number

interface Man<TSkin = TAbc | 'aboba'> {
  skin: TSkin
}

const alexey: Man = {
  skin: 12,
}

const array: Array<number> = [1, 2, 3]

const map: Record<string, any> = {
  a: '1',
  1: 'a',
}

function getManSkin<T>(m: Man<T>): T {
  return m.skin
}

function convertStringToArray(str: string): Array<string> {
  return str.split('')
}

const variable = ref()
