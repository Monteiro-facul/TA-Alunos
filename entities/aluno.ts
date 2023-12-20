class Aluno {
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

    constructor(
        nome: string,
        matricula: string,
        dataNascimento: Date,
        genero: string,
        endereco: string,
        email: string,
        telefone: string,
        curso: string,
        periodoIngresso: Date,
        disciplinasMatriculadas: string[],
        notas: { [disciplina: string]: number },
        statusMatricula: string,
        historicoAcademico: string[],
        senha: string
      ) {
        this.nome = nome;
        this.matricula = matricula;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
        this.curso = curso;
        this.periodoIngresso = periodoIngresso;
        this.disciplinasMatriculadas = disciplinasMatriculadas;
        this.notas = notas;
        this.statusMatricula = statusMatricula;
        this.historicoAcademico = historicoAcademico;
        this.senha = senha;
      }
    }