import { Controller, Get, Body, Post } from '@nestjs/common';
import { LivrosServices } from './livros.services/livros.services';
import { Livro } from './model/livro.model';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosServices: LivrosServices) {}

  @Get()
  findAll(): Promise<Livro[]> {
    return this.livrosServices.findAll();
  }
  @Post()
  create(@Body() livroDto: any) {
    return this.livrosServices.create(livroDto);
  }
}
