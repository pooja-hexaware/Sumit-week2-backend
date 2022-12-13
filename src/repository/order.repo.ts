import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { order, orderDocument } from 'src/schemas/order.schema';

@Injectable()
export class orderRepo {
    constructor(
        @InjectModel(order.name)
        private readonly orderModel: Model<orderDocument>) {}

    async create(data): Promise<order> {
        return new this.orderModel(data).save();
    }

    async findAll(): Promise<order[]> {
        return this.orderModel.find({})
            .exec();
    }

    async update(orderId, data): Promise<order> {
        const filter = { _id: orderId };
        return this.orderModel.findOneAndUpdate(filter, data);
    }

    async delete(orderId): Promise<order> {
        const filter = { _id: orderId };
        return this.orderModel.findByIdAndDelete(orderId);
    }
}