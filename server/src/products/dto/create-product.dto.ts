import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Piano', description: 'Product name' })
  @IsString()
  nameInstrumental: string;

  @ApiProperty({
    example:
      'Цифровое пианино, цвет белый. USB-выход. 88 клавиш, RH3 (Real Weighted Hammer Action 3), Чувствительность: 3 уровня. Система генерации звука: Stereo Piano System.',
    description: 'description',
  })
  @IsString()
  description: string;
}
