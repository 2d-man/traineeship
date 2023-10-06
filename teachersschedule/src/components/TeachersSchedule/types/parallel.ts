export interface IParallel {
  name: string
  id: number
}

export interface IGrade {
  classNumber: number
  parallel: Array<IParallel>
}

export interface IParallels {
  grade: Array<IGrade>
}
