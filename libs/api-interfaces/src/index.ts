import { ArrayMinSize, IsArray, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export interface Ingredient {
  id: string;
  name: string;
  price: number; // if extra needed!
}

export interface Sauce {
  id: string;
  name: string;
  price: number;
}

export interface Pizza {
  id: string;
  name: string;
  ingredients: Ingredient['id'][];
  price: number;
}

class PartialOrderPizzaDto {
  @IsString()
  id: string;

  @IsArray()
  @IsString({ each: true })
  ingredients: string[];
}

class PartialOrderSauceDto {
  @IsString()
  id: string;

  @IsNumber()
  count: number;
}

export class CreateOrderDto {
  @ValidateNested({ each: true })
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => PartialOrderPizzaDto)
  pizza: PartialOrderPizzaDto[];
  
  @ValidateNested({ each: true })
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => PartialOrderSauceDto)
  @IsOptional()
  sauce: PartialOrderSauceDto[];

  @IsNumber()
  total: number; 
}