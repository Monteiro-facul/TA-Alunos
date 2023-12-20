import { AlunoData } from './aluno_data'

export class Aluno {
  data: AlunoData

  constructor (data: Aluno.Params) {
    this.data = data
  }

  toJSON () {
    return {
      data: this.data

    }
  }
}
export namespace Aluno {
  export type Params = AlunoData

  export type Result = boolean
}
