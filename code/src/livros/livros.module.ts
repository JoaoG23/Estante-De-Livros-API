import { Module } from '@nestjs/common';
import { LivrosController } from './livros.controller';
import { LivrosServices } from './livros.services/livros.services';

import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './model/livro.model';

@Module({
  imports: [SequelizeModule.forFeature([Livro])],
  controllers: [LivrosController],
  providers: [LivrosServices],
})
export class LivrosModule {}
