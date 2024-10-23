import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Cartitem } from '../cartitem/entities/cartitem.entity';
import { Response } from 'express'; 

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  async createOrder(
    @Body('userId') userId: number,
    @Body('cartItems') cartItems: Cartitem[],
  ): Promise<Order> {
    return await this.orderService.createOrder(userId, cartItems);
  }


  @Get(':userId')
  async getOrders(@Param('userId') userId: number): Promise<Order[]> {
    return await this.orderService.getOrders(userId);
  }

  @Get(':orderId/export')  // Define una ruta GET que acepta un 'userId' como parámetro de la URL
  async exportOrdersToPdf(
    @Param('orderId') orderId: number,  // Captura el 'userId' de la URL como parámetro
    @Res() res: Response  // Utiliza la respuesta de Express para manipularla manualmente
  ) {
    const pdfBuffer = await this.orderService.exportOrdersToPdf(orderId);  // Llama al servicio para generar el PDF

    res.set({
      'Content-Type': 'application/pdf',  // Configura el tipo de contenido a 'application/pdf'
      'Content-Disposition': `attachment; filename=orders_${orderId}.pdf`,  // Especifica el nombre del archivo PDF
      'Content-Length': pdfBuffer.length,  // Incluye la longitud del archivo PDF
    });

    res.end(pdfBuffer);  // Envía el PDF generado al cliente
  }



  
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
