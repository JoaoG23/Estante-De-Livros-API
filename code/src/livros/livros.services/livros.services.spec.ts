import { Test, TestingModule } from '@nestjs/testing';
import { LivrosServices } from './livros.services';
import { livro } from '../../../test/seeds/livros';

describe('LivrosServices', () => {
  let provider: LivrosServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivrosServices],
    }).compile();

    provider = module.get<LivrosServices>(LivrosServices);
  });

  it('criar um livro', () => {
    const criar = provider.create(livro);
    console.log(criar);
    expect(criar).not.toBeNull();
  });
});
