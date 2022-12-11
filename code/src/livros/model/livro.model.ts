import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Livro extends Model {
  @Column
  nome: string;

  @Column
  genero: string;

  @Column
  ano_lancamento: number;

  @Column
  autor: string;

  @Column
  numero_paginas: string;
}
