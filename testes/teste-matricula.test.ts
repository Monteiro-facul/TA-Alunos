import { IDisciplinaRepository } from "../data/irepository";
import { Disciplina } from "../domain/model/disciplina";
import { DisciplinaUseCase } from "../domain/usecases/disciplinausecase";


class StubRepo implements IDisciplinaRepository {
    async create(disciplina: Disciplina): Promise< Disciplina | Error> {
        throw new Error("Method not implemented.");
    }
    async read(id: number): Promise< Disciplina | Error> {
        throw new Error("Method not implemented.");
    }
    async update(id: number, disciplina : Disciplina): Promise<Disciplina | Error> {
        throw new Error("Method not implemented.");
    }
    async delete(id: number): Promise<boolean | Error> {
        throw new Error("Method not implemented.");
    }
    async listAll(): Promise< Array<Disciplina> | Error > {
        const disc01 = new Disciplina();
        const disc02 = new Disciplina();

        disc01.id = "disc0001";
        disc01.nome = 'Geometria';
        disc02.id = "disc0002";
        disc02.nome = 'Calculo';

        const listaDisc = new Array(disc01, disc02);
        return listaDisc;
    }
  
}

function makeSut() {

    const repo = new StubRepo();
    const sut = new DisciplinaUseCase(repo);
    return { sut , repo }
}
describe('Consulta disciplinas cadastradas', () => {
    test('deve ser capaz de retornar Array contedo todas as diciplinas cadastradas (Quantidade)', async () => {
        // arrange
        const { sut, repo } = makeSut();
        
        // act
        const resultado = await repo.listAll() as Disciplina[];
        // assert
        expect(resultado.length).toEqual(2);
    })

    test('deve ser capaz de retornar Array contedo todas as diciplinas cadastradas (Conteúdo)', async () => {
        // arrange
        const disciplina01 = {
            id: 'disc0001',
            nome: 'Geometria'
        }

        const disciplina02 = {
            id: 'disc0002',
            nome: 'Calculo'
        }
           
        const { sut, repo } = makeSut();

        // act
        const resultado = await repo.listAll() as Disciplina[];
        
        // assert
        expect(resultado[0].id).toEqual(disciplina01.id);
        expect(resultado[1].id).toEqual(disciplina02.id);
    })
})
