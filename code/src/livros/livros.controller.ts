import {
  Controller,
  HttpCode,
  Get,
  Body,
  Post,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { LivrosServices } from './livros.services/livros.services';
import { Livro } from './model/livro.model';
import { LivroDto } from './livro.dto/LivroDto';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosServices: LivrosServices) {}

  @Get()
  listaTodos(): Promise<Livro[]> {
    return this.livrosServices.findAll();
  }
  @Post()
  @HttpCode(201)
  criar(@Body() livroDto: LivroDto) {
    return this.livrosServices.create(livroDto);
  }
  @Get(':id')
  listaUmLivro(@Param('id') id: string) {
    return this.livrosServices.findOne(id);
  }
  @Delete(':id')
  deletarUmLivro(@Param('id') id: string) {
    return this.livrosServices.remove(id);
  }

  @Put(':id')
  atualizarUmLivro(@Param('id') id: string, @Body() livroDto: LivroDto) {
    return this.livrosServices.update(id, livroDto);
  }
}
