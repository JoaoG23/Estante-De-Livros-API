import { Test, TestingModule } from '@nestjs/testing';
import { LivrosServices } from './livros.services';

describe('LivrosServices', () => {
  let provider: LivrosServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivrosServices],
    }).compile();

    provider = module.get<LivrosServices>(LivrosServices);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
