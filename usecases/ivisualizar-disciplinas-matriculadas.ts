interface IDisciplinasMatriculadasAlunoUseCase {
    disciplinasMatriculadas (aluno: Aluno): Promise< Array<Disciplina> | Error >;
}