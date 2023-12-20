import { Aluno } from '../model/aluno';

export interface MatricularEmDisciplina {
  matricular: (matricula: string, codigoDisciplina: string) => Promise<MatricularEmDisciplina.Result>;
}

export namespace MatricularEmDisciplina {
  export type Result = Aluno.Params | null;
}