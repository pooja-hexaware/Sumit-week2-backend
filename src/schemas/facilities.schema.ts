import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type facilitiesDocument = facilities & Document;

@Schema()
export class facilities {
   @Prop()
   name: String;

   @Prop()
   description: String;
}

export const facilitiesSchema = SchemaFactory.createForClass(facilities);