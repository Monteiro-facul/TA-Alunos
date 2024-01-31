import { Aluno } from './../model/aluno'
import { Disciplina } from './../model/disciplina'

interface IDisciplinasDisponveisAlunoUseCase {
    disciplinasDisponiveis (aluno: Aluno): Promise< Array<Disciplina> | Error >;
}