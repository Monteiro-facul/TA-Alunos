interface IMatricularAlunoDisciplinaUseCase {
    matricular (aluno: Aluno, disciplina: Disciplina): Promise< number | Error >;
}