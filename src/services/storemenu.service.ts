import { Injectable } from '@nestjs/common';
import { storemenuRepo } from '../repository/storemenu.repo';
import { storemenu } from '../schemas/storemenu.schema';

@Injectable()
export class storemenuService {
    constructor(
        private readonly storemenuRepo: storemenuRepo
    ) { }

    async findAll(): Promise<storemenu[]> {
        return this.storemenuRepo.findAll();
    }

    async findOne(id): Promise<storemenu> {
        return this.storemenuRepo.findOne(id);
    }

    async create(data): Promise<storemenu> {
        data.createddate = new Date();
        return this.storemenuRepo.create(data);
    }

    async update(storemenuId, data): Promise<storemenu> {
        return this.storemenuRepo.update(storemenuId, data);
    }

    async delete(storemenuId): Promise<storemenu> {
        return this.storemenuRepo.delete(storemenuId);
    }
}