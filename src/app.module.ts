import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { ProductsModule } from './products/products.module';
import { FileModule } from './file/file.module';

config();
@Module({
  imports: [
    AuthModule,
    ProductsModule,
    FileModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_DB),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
