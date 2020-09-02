import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Transport } from '@nestjs/microservices'
import { join } from 'path'

const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    host: '127.0.0.1',
    port: 8877,
    package: 'product',
    protoPath: join(__dirname, '../src/product.proto')
  }
}

async function bootstrap () {
  // const app = await NestFactory.create(AppModule)
  // await app.listen(3000)
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions)
  app.listen(() => {
    console.log('Product Microservice is listening... ')
  })
}
bootstrap()
