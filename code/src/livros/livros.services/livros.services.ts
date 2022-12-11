import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Livro } from '../model/livro.model';

@Injectable()
export class LivrosServices {
  constructor(
    @InjectModel(Livro)
    private livroModel: typeof Livro,
  ) {}

  async findAll(): Promise<Livro[]> {
    return this.livroModel.findAll();
  }
  async create(livro: any): Promise<Livro> {
    return this.livroModel.create(livro);
  }

  findOne(id: string): Promise<Livro> {
    return this.livroModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
