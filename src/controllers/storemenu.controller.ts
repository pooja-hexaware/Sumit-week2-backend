import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { storemenuDto } from '../dto/storemenu-dto.dto';
import { storemenuService } from '../services/storemenu.service';


@Controller('storemenu')
export class storemenuController {
    constructor(private readonly storemenuService: storemenuService) { }

    @Post()
    async create(@Body() storemenuDto: storemenuDto) {
        const res = this.storemenuService.create(storemenuDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.storemenuService.findAll();
    }

    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.storemenuService.findOne(id);
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() storemenuDto: storemenuDto) {
        return this.storemenuService.update(id, storemenuDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.storemenuService.delete(id);
    }
}