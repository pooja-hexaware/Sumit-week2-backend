import { Injectable } from '@nestjs/common';
import { allowedToppingsRepo } from '../repository/allowedtoppings.repo';
import { allowedToppings } from '../schemas/allowedtoppings.schema';

@Injectable()
export class allowedToppingsService {
    constructor(
        private readonly allowedtoppingsRepo: allowedToppingsRepo
    ) { }

    async findAll(): Promise<allowedToppings[]> {
        return this.allowedtoppingsRepo.findAll();
    }

    async create(data): Promise<allowedToppings> {
        data.createddate = new Date();
        return this.allowedtoppingsRepo.create(data);
    }

    async update(allowedtoppingsId, data): Promise<allowedToppings> {
        return this.allowedtoppingsRepo.update(allowedtoppingsId, data);
    }

    async delete(allowedtoppingsId): Promise<allowedToppings> {
        return this.allowedtoppingsRepo.delete(allowedtoppingsId);
    }
}