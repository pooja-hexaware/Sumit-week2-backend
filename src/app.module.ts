import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { facilitiesModule } from "./modules/facilities.module";
import { storeModule } from "./modules/store.module";
import { allowedToppingsModule } from "./modules/allowedtoppings.module";
import { menuModule } from "./modules/menu.module";
import { storemenuModule } from "./modules/storemenu.module";
import { orderModule } from "./modules/order.module";
import { customerModule } from "./modules/customer.module";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGODB_URL, {
    autoCreate: true,
  }),
        facilitiesModule,
        storeModule,
        allowedToppingsModule,
        menuModule,
        storemenuModule,
        orderModule,
        customerModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
