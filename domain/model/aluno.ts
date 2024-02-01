import {Disciplina} from './disciplina'
import {Curso} from './curso'

export class Aluno {
    nome: string;
    matricula: string;
    cr: number
    periodo:number
    dataNascimento: Date;
    genero: string;
    endereco: string;
    email: string;
    telefone: string;
    curso: Curso;
    periodoIngresso: Date;
    disciplinasMatriculadas: string[]; // Assumindo que o identificador da disciplina é uma string
    notas: { [disciplina: string]: number }; // Mapeando notas por disciplina
    statusMatricula: string;
    historicoAcademico: string[];
    senha: string;
    disciplinas_totais : Disciplina[]
    disciplinas_cursadas: Disciplina[]
    disciplinas_restantes: Disciplina[]



    constructor(nome:string, cr:number,periodo:number, curso:Curso){
        this.nome = nome;
        this.cr = cr;
        this.periodo = periodo;
        this.disciplinas_totais = curso.disciplinas
        this.disciplinas_restantes = this.disciplinas_totais
    }
    }