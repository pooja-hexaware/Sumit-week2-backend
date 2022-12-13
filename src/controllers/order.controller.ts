import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { orderDto } from '../dto/order-dto.dto';
import { orderService } from '../services/order.service';


@Controller('order')
export class orderController {
    constructor(private readonly orderService: orderService) { }

    @Post()
    async create(@Body() orderDto: orderDto) {
        const res = this.orderService.create(orderDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.orderService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() orderDto: orderDto) {
        return this.orderService.update(id, orderDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.orderService.delete(id);
    }
}