import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { allowedToppings, allowedToppingsDocument } from 'src/schemas/allowedtoppings.schema';

@Injectable()
export class allowedToppingsRepo {
    constructor(
        @InjectModel(allowedToppings.name)
        private readonly allowedtoppingsModel: Model<allowedToppingsDocument>) {}

    async create(data): Promise<allowedToppings> {
        return new this.allowedtoppingsModel(data).save();
    }

    async findAll(): Promise<allowedToppings[]> {
        return this.allowedtoppingsModel.find({})
            .exec();
    }

    async update(allowedtoppingsId, data): Promise<allowedToppings> {
        const filter = { _id: allowedtoppingsId };
        return this.allowedtoppingsModel.findOneAndUpdate(filter, data);
    }

    async delete(allowedtoppingsId): Promise<allowedToppings> {
        const filter = { _id: allowedtoppingsId };
        return this.allowedtoppingsModel.findByIdAndDelete(allowedtoppingsId);
    }
}