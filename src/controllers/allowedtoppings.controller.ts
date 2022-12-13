import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { allowedToppingsDto } from '../dto/allowedtoppings-dto.dto';
import { allowedToppingsService } from '../services/allowedtoppings.service';


@Controller('allowedToppings')
export class allowedToppingsController {
    constructor(private readonly allowedtoppingsService: allowedToppingsService) { }

    @Post()
    async create(@Body() allowedtoppingsDto: allowedToppingsDto) {
        const res = this.allowedtoppingsService.create(allowedtoppingsDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.allowedtoppingsService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() allowedtoppingsDto: allowedToppingsDto) {
        return this.allowedtoppingsService.update(id, allowedtoppingsDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.allowedtoppingsService.delete(id);
    }
}