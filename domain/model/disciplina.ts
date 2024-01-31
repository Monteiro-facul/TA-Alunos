class Disciplina{
    id: string;
    nome: string;
    carga_horaria: number;
    pre_requisito: Array<Disciplina>;
    professor: string;
    horario: string;
    sala: string;
    vagas: number;
    periodo: number;  
}

export { Disciplina } 