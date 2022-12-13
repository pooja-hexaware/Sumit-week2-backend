import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { allowedToppingsController } from '../controllers/allowedtoppings.controller';
import { allowedToppingsService } from '../services/allowedtoppings.service';
import { allowedToppingsRepo } from '../repository/allowedtoppings.repo';
import { allowedToppings, allowedToppingsSchema } from '../schemas/allowedtoppings.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: allowedToppings.name, schema: allowedToppingsSchema }])
    ],
    controllers: [allowedToppingsController],
    providers: [allowedToppingsService, allowedToppingsRepo],
    exports: [allowedToppingsService, allowedToppingsRepo]
  })
  export class allowedToppingsModule { }