import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class LivroDto {
  @IsString()
  @IsNotEmpty({
    message: 'Nao pode ser vazio',
  })
  public nome: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public genero: string;

  @IsNumber()
  public ano_lancamento: number;

  @IsString()
  @IsNotEmpty()
  public autor: string;

  @IsNumber()
  public numero_paginas: number;
}
