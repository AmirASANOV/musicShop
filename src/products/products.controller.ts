import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { TokenGuard } from 'src/auth/token.guard';
import { Request } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@ApiBearerAuth()
@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(TokenGuard)
  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  async create(
    @UploadedFiles() files,
    @Body() createProductDto: CreateProductDto,
    @Req() req: Request,
  ) {
    const picture = files;
    return this.productsService.create(
      createProductDto,
      req['user'],
      picture[0],
    );
  }

  @UseGuards(TokenGuard)
  @Get()
  async getAllProducts(@Req() req: Request) {
    return this.productsService.getAllProducts(req['user']);
  }
}
