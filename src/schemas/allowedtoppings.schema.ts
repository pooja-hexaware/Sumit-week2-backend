import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type allowedToppingsDocument = allowedToppings & Document;

@Schema()
export class allowedToppings {
   @Prop()
   name: String;

   @Prop()
   price: String;
}

export const allowedToppingsSchema = SchemaFactory.createForClass(allowedToppings);