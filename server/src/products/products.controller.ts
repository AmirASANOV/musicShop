import { Controller, Body, UseGuards, Req, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { TokenGuard } from 'src/auth/token.guard';
import { Request } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ProductsService } from './products.service';

@ApiBearerAuth()
@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(TokenGuard)
  @Post('create')
  async createProduct(
    @Body() createProductDto: CreateProductDto,
    @Req() req: Request,
  ) {
    return this.productsService.createProductService(
      createProductDto,
      req['user'],
    );
  }

  @UseGuards(TokenGuard)
  @Get()
  async getAllProducts(@Req() req: Request) {
    return this.productsService.getAllProductsService(req['user']);
  }
}
