import { Injectable } from '@nestjs/common';
import { customerRepo } from '../repository/customer.repo';
import { customer } from '../schemas/customer.schema';

@Injectable()
export class customerService {
    constructor(
        private readonly customerRepo: customerRepo
    ) { }

    async findAll(): Promise<customer[]> {
        return this.customerRepo.findAll();
    }

    async create(data): Promise<customer> {
        data.createddate = new Date();
        return this.customerRepo.create(data);
    }

    async update(customerId, data): Promise<customer> {
        return this.customerRepo.update(customerId, data);
    }

    async delete(customerId): Promise<customer> {
        return this.customerRepo.delete(customerId);
    }
}