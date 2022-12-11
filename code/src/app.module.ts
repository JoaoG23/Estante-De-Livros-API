import { SequelizeModule } from '@nestjs/sequelize';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosModule } from './livros/livros.module';
import { Livro } from './livros/model/livro.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'livros_db',
      models: [Livro],
      autoLoadModels: true,
      synchronize: true,
    }),

    LivrosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
