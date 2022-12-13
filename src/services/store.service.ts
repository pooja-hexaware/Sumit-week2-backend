import { Injectable } from '@nestjs/common';
import { storeRepo } from '../repository/store.repo';
import { store } from '../schemas/store.schema';

@Injectable()
export class storeService {
	constructor(
		private readonly storeRepo: storeRepo
	) { }

	async findAll(): Promise<store[]> {
		return this.storeRepo.findAll();
	}

	async find(id): Promise<store[]> {
		return this.storeRepo.find(id);
	}

	async create(data): Promise<store> {
		data.createddate = new Date();
		return this.storeRepo.create(data);
	}

	async update(storeId, data): Promise<store> {
		return this.storeRepo.update(storeId, data);
	}

	async delete(storeId): Promise<store> {
		return this.storeRepo.delete(storeId);
	}
}