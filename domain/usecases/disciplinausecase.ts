import { IDisciplinasDisponveisAlunoUseCase } from "./ivisualizar-disciplinas-aluno";
import { Aluno } from "../model/aluno";
import { Disciplina } from "../model/disciplina";
import { IDisciplinaRepository } from "../../data/irepository";

class DisciplinaUseCase implements IDisciplinasDisponveisAlunoUseCase {
    private repo: IDisciplinaRepository;
    constructor (repo: IDisciplinaRepository) {
        this.repo = repo;
    }

    disciplinasDisponiveis (aluno: Aluno): Promise< Array<Disciplina> | Error >{
        throw new Error("Method not implemented.");
    }
}

export {DisciplinaUseCase}