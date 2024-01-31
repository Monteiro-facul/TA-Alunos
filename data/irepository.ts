import { Disciplina } from './../domain/model/disciplina'


interface IDisciplinaRepository<E> {
    create(entidade: Partial<E>): Promise<E | Error>;
    read(id: number): Promise<E | Error>;
    update(id: number, entidade: Partial<E>): Promise<E | Error>;
    delete(id: number): Promise<boolean | Error>;
    listAll(): Promise< Array<Disciplina> | Error >;
}

export { IDisciplinaRepository }