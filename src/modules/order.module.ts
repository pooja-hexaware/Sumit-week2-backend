import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { orderController } from '../controllers/order.controller';
import { orderService } from '../services/order.service';
import { orderRepo } from '../repository/order.repo';
import { order, orderSchema } from '../schemas/order.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: order.name, schema: orderSchema }])
    ],
    controllers: [orderController],
    providers: [orderService, orderRepo],
    exports: [orderService, orderRepo]
  })
  export class orderModule { }