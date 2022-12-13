import { Injectable } from '@nestjs/common';
import { facilitiesRepo } from '../repository/facilities.repo';
import { facilities } from '../schemas/facilities.schema';

@Injectable()
export class facilitiesService {
    constructor(
        private readonly facilitiesRepo: facilitiesRepo
    ) { }

    async findAll(): Promise<facilities[]> {
        return this.facilitiesRepo.findAll();
    }

    async create(data): Promise<facilities> {
        data.createddate = new Date();
        return this.facilitiesRepo.create(data);
    }

    async update(facilitiesId, data): Promise<facilities> {
        return this.facilitiesRepo.update(facilitiesId, data);
    }

    async delete(facilitiesId): Promise<facilities> {
        return this.facilitiesRepo.delete(facilitiesId);
    }
}