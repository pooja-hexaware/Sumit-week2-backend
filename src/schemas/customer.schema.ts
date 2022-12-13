import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type customerDocument = customer & Document;

@Schema()
export class customer {
   @Prop()
   name: String;

   @Prop()
   postalcode: String;

   @Prop()
   city: String;
}

export const customerSchema = SchemaFactory.createForClass(customer);