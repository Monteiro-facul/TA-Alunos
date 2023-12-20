
import { Aluno } from './../model/aluno'

export interface GetAluno {
  get: (getIAluno: GetAluno.Params) => Promise<GetAluno.Result>
}
export namespace GetAluno {
  export type Params = Omit<Aluno.Params, Exclude<keyof Aluno.Params, 'matricula'>>

  export type Result = Aluno.Params | false
}
