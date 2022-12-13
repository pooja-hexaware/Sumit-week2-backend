import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { customerController } from '../controllers/customer.controller';
import { customerService } from '../services/customer.service';
import { customerRepo } from '../repository/customer.repo';
import { customer, customerSchema } from '../schemas/customer.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: customer.name, schema: customerSchema }])
    ],
    controllers: [customerController],
    providers: [customerService, customerRepo],
    exports: [customerService, customerRepo]
  })
  export class customerModule { }