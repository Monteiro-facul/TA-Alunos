import { Aluno } from '../model/aluno';
import { Disciplina } from '../model/disciplina';

class MatriculaUseCase {

  matricularAluno(aluno: Aluno, disciplina: Disciplina): string | string[] {
    let status = disciplina.solicitarInscricao(aluno);
    if(status == true){
      return "Aluno Matriculado"
    } else if(status == false){
        return "Limite de vagas excedido"
    } else {
        let listaEsperaOrdenada = Disciplina.ordenarPorCr(status)
        let nomesListaEsperaOrdenada = listaEsperaOrdenada.map(e=>e.nome)
        return "Sua posição na fila de espera é: ${nomesListaEsperaOrdenada.indexOf(Aluno.nome)}"
    }
  }

}