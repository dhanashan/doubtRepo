import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder , SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder() 
.setTitle('Simple CRUD API') 
.setDescription('CRUD Using NestJS and MySQL') .                
setVersion('1.0') 
.addTag('CRUD') .build(); 
const document = SwaggerModule.createDocument(app, config); SwaggerModule.setup('api', 
app, document);
await app.listen(process.env.PORT||3001,()=>{
  console.log(`app is running on :${process.env.PORT}`)
});
  
}
bootstrap();
