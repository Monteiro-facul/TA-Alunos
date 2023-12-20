
import { Aluno } from './../model/aluno'

export interface GetAluno {
  get: (matricula: string) => Promise<GetAluno.Result>
}
export namespace GetAluno {
  export type Result = Aluno.Params | false
}
