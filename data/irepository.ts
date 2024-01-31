import { Disciplina } from './../domain/model/disciplina'


interface IDisciplinaRepository {
    create(entidade: Partial<Disciplina>): Promise<Disciplina | Error>;
    read(id: number): Promise<Disciplina | Error>;
    update(id: number, entidade: Partial<Disciplina>): Promise<Disciplina | Error>;
    delete(id: number): Promise<boolean | Error>;
    listAll(): Promise< Array<Disciplina> | Error >;
}

export { IDisciplinaRepository }