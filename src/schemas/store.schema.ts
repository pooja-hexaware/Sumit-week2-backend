import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type storeDocument = store & Document;

@Schema()
export class store {
   @Prop()
   id: Number;

   @Prop()
   name: String;

   @Prop()
   address: String;

   @Prop()
   zip: String;

   @Prop()
   city: String;

   @Prop()
   state: String;

   @Prop()
   storePhone: String;

   @Prop()
   kitchenPhone: String;

   @Prop()
   isActive: String;
}

export const storeSchema = SchemaFactory.createForClass(store);