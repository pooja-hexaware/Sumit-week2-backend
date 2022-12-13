import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { customer, customerDocument } from 'src/schemas/customer.schema';

@Injectable()
export class customerRepo {
    constructor(
        @InjectModel(customer.name)
        private readonly customerModel: Model<customerDocument>) {}

    async create(data): Promise<customer> {
        return new this.customerModel(data).save();
    }

    async findAll(): Promise<customer[]> {
        return this.customerModel.find({})
            .exec();
    }

    async update(customerId, data): Promise<customer> {
        const filter = { _id: customerId };
        return this.customerModel.findOneAndUpdate(filter, data);
    }

    async delete(customerId): Promise<customer> {
        const filter = { _id: customerId };
        return this.customerModel.findByIdAndDelete(customerId);
    }
}