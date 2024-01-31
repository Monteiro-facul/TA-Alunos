import { IDisciplinaRepository } from "../data/irepository";
import { Disciplina } from "../domain/model/disciplina";

class StubRepo implements IDisciplinaRepository <Disciplina> {
    async create(disciplina: Disciplina): Promise< Disciplina | Error>{
        throw new Error("Method not implemented.");
    }
    async read(id: number): Promise< Disciplina | Error>{
        throw new Error("Method not implemented.");
    }
    async update(id: number, disciplina : Disciplina): Promise<Disciplina | Error>{
        throw new Error("Method not implemented.");
    }
    async delete(id: number): Promise<boolean | Error>{
        throw new Error("Method not implemented.");
    }
    async listAll(): Promise< Array<Disciplina> | Error >{
        throw new Error("Method not implemented.");
    }
}