import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ tableName: 'tb_livros' })
export class Livro extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  nome: string;

  @Column
  genero: string;

  @Column
  ano_lancamento: number;

  @Column
  autor: string;

  @Column
  numero_paginas: number;
}
