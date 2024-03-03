import { InjectRepository } from '@nestjs/typeorm';

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
    private fileService: FileService,
  ) {}

  async create(createProductDto: CreateProductDto, user, picture) {
    const picturePath = await this.fileService.createFile(
      FileType.IMAGE,
      picture,
    );
    const product = await this.productsRepository.save({
      ...createProductDto,
      user: {
        id: user.userId,
      },
      picture: picturePath,
    });
    console.log(product);
    return product;
  }

  async getAllProducts(user) {
    const products = await this.productsRepository.find({
      where: { user: { id: user.userId } },
    });
    return products;
  }
}
