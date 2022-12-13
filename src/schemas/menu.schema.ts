import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type menuDocument = menu & Document;

@Schema()
export class menu {
   @Prop()
   name: String;

   @Prop()
   description: String;

   @Prop()
   amount: String;

   @Prop()
   quantity: String;
}

export const menuSchema = SchemaFactory.createForClass(menu);