import { Aluno } from './../model/aluno'
import { Disciplina } from './../model/disciplina'

interface IDisciplinasMatriculadasAlunoUseCase {
    disciplinasMatriculadas (aluno: Aluno): Promise< Array<Disciplina> | Error >;
}