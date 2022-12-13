import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type orderDocument = order & Document;

@Schema()
export class order {
   @Prop()
   orderDate: String;
}

export const orderSchema = SchemaFactory.createForClass(order);