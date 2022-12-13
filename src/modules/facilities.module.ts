import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { facilitiesController } from '../controllers/facilities.controller';
import { facilitiesService } from '../services/facilities.service';
import { facilitiesRepo } from '../repository/facilities.repo';
import { facilities, facilitiesSchema } from '../schemas/facilities.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: facilities.name, schema: facilitiesSchema }])
    ],
    controllers: [facilitiesController],
    providers: [facilitiesService, facilitiesRepo],
    exports: [facilitiesService, facilitiesRepo]
  })
  export class facilitiesModule { }