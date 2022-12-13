import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { storeDto } from '../dto/store-dto.dto';
import { storeService } from '../services/store.service';


@Controller('store')
export class storeController {
	constructor(private readonly storeService: storeService) { }

	@Post()
	async create(@Body() storeDto: storeDto) {
		const res = this.storeService.create(storeDto);
		return res;
	}

	@Get()
	async findAll() {
		return this.storeService.findAll();
	}

	@Get('/:id')
	async find(@Param('id') id: string) {
		return this.storeService.find(id);
	}

	@Post('/:id')
	update(@Param('id') id: string, @Body() storeDto: storeDto) {
		return this.storeService.update(id, storeDto);
	}

	@Delete('/:id')
	delete(@Param('id') id: string) {
		return this.storeService.delete(id);
	}
}