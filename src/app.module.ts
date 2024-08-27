import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImcController } from './imc/imc.controller';

@Module({
  imports: [],
  controllers: [AppController, ImcController],
  providers: [AppService],
})
export class AppModule {}
