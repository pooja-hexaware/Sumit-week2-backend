import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { storemenuController } from '../controllers/storemenu.controller';
import { storemenuService } from '../services/storemenu.service';
import { storemenuRepo } from '../repository/storemenu.repo';
import { storemenu, storemenuSchema } from '../schemas/storemenu.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: storemenu.name, schema: storemenuSchema }])
    ],
    controllers: [storemenuController],
    providers: [storemenuService, storemenuRepo],
    exports: [storemenuService, storemenuRepo]
  })
  export class storemenuModule { }