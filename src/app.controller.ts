import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, GrpcMethod } from '@nestjs/microservices';


interface INameString {
  name: string
}

interface IResponseProduct {
  response: {
    name: string
  }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Post('create/product')
  // @MessagePattern('create/product')
  @GrpcMethod('AppController', 'createProduct')
  createProduct(input: INameString, metadata: any): IResponseProduct {
    return { response: this.appService.createProduct(input.name) };
  }
}
