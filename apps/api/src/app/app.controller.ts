import { v4 } from 'uuid';
import { Body, Controller, Get, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateOrderDto, Ingredient, Pizza, Sauce } from '@nfw/api-interfaces';

const sauces = [
  { id: v4(), name: 'czosnkowy', price: 2 },
  { id: v4(), name: 'ostry', price: 2.5 },
  { id: v4(), name: '1000 wysp', price: 2.5 },
];

const ingredients = [
  { id: v4(), name: 'sos', price: 1 },
  { id: v4(), name: 'ser', price: 2 },
  { id: v4(), name: 'pieczarki', price: 2 },
  { id: v4(), name: 'szynka', price: 3 },
  { id: v4(), name: 'salami', price: 3 },
  { id: v4(), name: 'ananas', price: 2 },
  { id: v4(), name: 'papryka', price: 2 },
  { id: v4(), name: 'cebula', price: 2 },
  { id: v4(), name: 'pomidor', price: 2 },
];

const pizzas = [
  {
    id: v4(),
    name: 'MARGHERITA',
    price: 15,
    ingredients: [
      ingredients[0].id,
      ingredients[1].id
    ]
  },
  {
    id: v4(),
    name: 'FUNGHI',
    price: 16,
    ingredients: [
      ingredients[0].id,
      ingredients[1].id,
      ingredients[2].id
    ]
  },
  {
    id: v4(),
    name: 'VESUVIO',
    price: 17,
    ingredients: [
      ingredients[0].id,
      ingredients[1].id,
      ingredients[3].id,
    ]
  },
  {
    id: v4(),
    name: 'SALAMI',
    price: 17,
    ingredients: [
      ingredients[0].id,
      ingredients[1].id,
      ingredients[4].id,
    ]
  },
  {
    id: v4(),
    name: 'CAPRICCIOSA',
    price: 20,
    ingredients: [
      ingredients[0].id,
      ingredients[1].id,
      ingredients[2].id,
      ingredients[3].id,
    ]
  },
  {
    id: v4(),
    name: 'HAWAJSKA',
    price: 20,
    ingredients: [
      ingredients[0].id,
      ingredients[1].id,
      ingredients[3].id,
      ingredients[5].id,
    ]
  },
  {
    id: v4(),
    name: 'VERONA',
    price: 21,
    ingredients: [
      ingredients[0].id,
      ingredients[1].id,
      ingredients[4].id,
      ingredients[5].id,
    ]
  },
  {
    id: v4(),
    name: 'ROMA',
    price: 22,
    ingredients: [
      ingredients[0].id,
      ingredients[1].id,
      ingredients[4].id,
      ingredients[7].id,
      ingredients[8].id,
    ]
  },
  {
    id: v4(),
    name:'COLOSSEUM',
    price: 22,
    ingredients: [
      ingredients[0].id,
      ingredients[1].id,
      ingredients[2].id,
      ingredients[3].id,
      ingredients[6].id,
      ingredients[7].id,
    ]
  },
];

@Controller()
export class AppController {
  constructor() {}

  @Get('/pizza')
  getPizzas(): Promise<Pizza[]> {
    return new Promise(resolve => setTimeout(() => resolve(pizzas), 1500));
  }

  @Get('/sauce')
  getSauces(): Promise<Sauce[]> {
    return new Promise(resolve => setTimeout(() => resolve(sauces), 2100));
  }

  @Get('/ingredient')
  getIngredients(): Promise<Ingredient[]> {
    return new Promise(resolve => setTimeout(() => resolve(ingredients), 1800));
  }

  @Post('/order')
  @UsePipes(new ValidationPipe())
  postOrder(
    @Body() order: CreateOrderDto
  ) {
    Logger.log({
      message: 'Order received',
      order
    });

    return new Promise(resolve => setTimeout(() => resolve({ message: 'Order accepted!' }), 1300));
  }
}
