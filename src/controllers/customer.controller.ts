import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { customerDto } from '../dto/customer-dto.dto';
import { customerService } from '../services/customer.service';


@Controller('customer')
export class customerController {
    constructor(private readonly customerService: customerService) { }

    @Post()
    async create(@Body() customerDto: customerDto) {
        const res = this.customerService.create(customerDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.customerService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() customerDto: customerDto) {
        return this.customerService.update(id, customerDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.customerService.delete(id);
    }
}