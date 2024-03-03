import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { FileService } from 'src/file/file.service';

@Module({
  controllers: [ProductController],
  providers: [ProductsService, FileService],
  imports: [TypeOrmModule.forFeature([Product])],
})
export class ProductsModule {}
