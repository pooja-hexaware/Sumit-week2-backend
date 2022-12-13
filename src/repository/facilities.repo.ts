import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { facilities, facilitiesDocument } from 'src/schemas/facilities.schema';

@Injectable()
export class facilitiesRepo {
    constructor(
        @InjectModel(facilities.name)
        private readonly facilitiesModel: Model<facilitiesDocument>) {}

    async create(data): Promise<facilities> {
        return new this.facilitiesModel(data).save();
    }

    async findAll(): Promise<facilities[]> {
        return this.facilitiesModel.find({})
            .exec();
    }

    async update(facilitiesId, data): Promise<facilities> {
        const filter = { _id: facilitiesId };
        return this.facilitiesModel.findOneAndUpdate(filter, data);
    }

    async delete(facilitiesId): Promise<facilities> {
        const filter = { _id: facilitiesId };
        return this.facilitiesModel.findByIdAndDelete(facilitiesId);
    }
}