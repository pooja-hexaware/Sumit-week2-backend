import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { store, storeDocument } from 'src/schemas/store.schema';

@Injectable()
export class storeRepo {
	constructor(
		@InjectModel(store.name)
		private readonly storeModel: Model<storeDocument>) { }

	async create(data): Promise<store> {
		return new this.storeModel(data).save();
	}

	async find(id: string) {
		let cityResult = this.storeModel.find({ city: id });
		if (cityResult != null) {
			return cityResult;
		}

		let zipResult = this.storeModel.find({ zip: id });
		if (zipResult != null) {
			return zipResult;
		}

		let stateResult = this.storeModel.find({ state: id });
		if (stateResult != null) {
			return stateResult;
		}
	}

	async findAll(): Promise<store[]> {
		return this.storeModel.find({})
			.exec();
	}

	async update(storeId, data): Promise<store> {
		const filter = { _id: storeId };
		return this.storeModel.findOneAndUpdate(filter, data);
	}

	async delete(storeId): Promise<store> {
		const filter = { _id: storeId };
		return this.storeModel.findByIdAndDelete(storeId);
	}
}