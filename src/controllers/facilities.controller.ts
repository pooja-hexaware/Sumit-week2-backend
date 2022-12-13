import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { facilitiesDto } from '../dto/facilities-dto.dto';
import { facilitiesService } from '../services/facilities.service';


@Controller('facilities')
export class facilitiesController {
    constructor(private readonly facilitiesService: facilitiesService) { }

    @Post()
    async create(@Body() facilitiesDto: facilitiesDto) {
        const res = this.facilitiesService.create(facilitiesDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.facilitiesService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() facilitiesDto: facilitiesDto) {
        return this.facilitiesService.update(id, facilitiesDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.facilitiesService.delete(id);
    }
}