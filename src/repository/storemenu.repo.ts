import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { storemenu, storemenuDocument } from 'src/schemas/storemenu.schema';

@Injectable()
export class storemenuRepo {
    constructor(
        @InjectModel(storemenu.name)
        private readonly storemenuModel: Model<storemenuDocument>) { }

    async create(data): Promise<storemenu> {
        return new this.storemenuModel(data).save();
    }

    async findAll(): Promise<storemenu[]> {
        return this.storemenuModel.find({})
            .exec();
    }

    async findOne(id): Promise<storemenu> {
        return this.storemenuModel.findOne({ storeId: id });
    }

    async update(storemenuId, data): Promise<storemenu> {
        const filter = { _id: storemenuId };
        return this.storemenuModel.findOneAndUpdate(filter, data);
    }

    async delete(storemenuId): Promise<storemenu> {
        const filter = { _id: storemenuId };
        return this.storemenuModel.findByIdAndDelete(storemenuId);
    }
}