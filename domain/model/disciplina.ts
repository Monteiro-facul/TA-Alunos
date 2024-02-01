import {Aluno} from './aluno'

export class Disciplina{
    id: string;
    nome: string;
    carga_horaria: number;
    pre_requisito: Array<Disciplina>;
    professor: string;
    horario: string;
    sala: string;
    vagas_totais: number;
    vagas_disponiveis: number;
    periodo: number;

    inscritos: Aluno[];
    espera: Aluno[]

    constructor(nome:string,vagasDisponiveis:number){
        this.nome=nome;
        this.vagas_disponiveis=this.vagas_totais - this.inscritos.length;
        this.inscritos = []
        this.espera = []
    }

    ordenarPorCr(listaEspera: Aluno[]){
        for(let i=0;i<listaEspera.length-1;i++){
            let min = i;
            for(let j=i+1;j<listaEspera.length;j++){
                if(listaEspera[j].cr<listaEspera[min].cr){
                    min = j
                }
            }
            let aux = listaEspera[i];
            listaEspera[i] = listaEspera[min]
            listaEspera[min] = aux;
        }
    }

    solicitarInclusao(aluno: Aluno) {
        if(this.vagas_disponiveis <= 0){
            this.ordenarPorCr(this.espera);
            return false
        } else {
            if(this.periodo == aluno.periodo || aluno.disciplinas_restantes.length <= 4){
                return true;
            } else {
                this.espera.push(aluno)
                return this.espera.map(e=>e.nome)
            }
        }
    }
}
