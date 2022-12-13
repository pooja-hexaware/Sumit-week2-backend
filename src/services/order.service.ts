import { Injectable } from '@nestjs/common';
import { orderRepo } from '../repository/order.repo';
import { order } from '../schemas/order.schema';

@Injectable()
export class orderService {
    constructor(
        private readonly orderRepo: orderRepo
    ) { }

    async findAll(): Promise<order[]> {
        return this.orderRepo.findAll();
    }

    async create(data): Promise<order> {
        data.createddate = new Date();
        return this.orderRepo.create(data);
    }

    async update(orderId, data): Promise<order> {
        return this.orderRepo.update(orderId, data);
    }

    async delete(orderId): Promise<order> {
        return this.orderRepo.delete(orderId);
    }
}