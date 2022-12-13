import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type storemenuDocument = storemenu & Document;

@Schema()
export class storemenu {
   @Prop()
   storeId: Number;
}

export const storemenuSchema = SchemaFactory.createForClass(storemenu);