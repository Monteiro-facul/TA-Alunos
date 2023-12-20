interface IDisciplinasDisponveisAlunoUseCase {
    disciplinasDisponiveis (aluno: Aluno): Promise< Array<Disciplina> | Error >;
}