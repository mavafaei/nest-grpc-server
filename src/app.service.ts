import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createProduct(name: string): any {
    return {
      name: `prodcut name is ${name}`
    };
  }
}
