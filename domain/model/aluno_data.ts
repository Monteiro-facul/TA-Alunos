export type AlunoData = {
    nome: string;
    matricula: string;
    dataNascimento: Date;
    genero: string;
    endereco: string;
    email: string;
    telefone: string;
    curso: string;
    periodoIngresso: Date;
    disciplinasMatriculadas: string[]; // Assumindo que o identificador da disciplina é uma string
    notas: { [disciplina: string]: number }; // Mapeando notas por disciplina
    statusMatricula: string;
    historicoAcademico: string[];
    senha: string;

    }