import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Orderitem } from '../orderitem/entities/orderitem.entity';
import { Cartitem } from '../cartitem/entities/cartitem.entity';
import * as PdfPrinter from 'pdfmake';
import { User } from '../users/entities/user.entity';


@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(Orderitem)
    private orderItemsRepository: Repository<Orderitem>,
    @InjectRepository(Order)
    private userRepository: Repository<User>,
  ) {}

  async createOrder(userId: number, cartItems: Cartitem[]): Promise<Order> {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    const order = this.ordersRepository.create({
      user: { id: userId },
      total_amount: totalAmount,
      status: 'PENDING',
    });

    const savedOrder = await this.ordersRepository.save(order);

    const orderItems = cartItems.map((item) =>
      this.orderItemsRepository.create({
        order: savedOrder,
        product: item.product,
        quantity: item.quantity,
        price_at_order: item.product.price,
      }),
    );

    await this.orderItemsRepository.save(orderItems);

    return savedOrder;
  }

  async getOrders(userId: number): Promise<Order[]> {
    return await this.ordersRepository.find({ where: { user: { id: userId } }, relations: ['items', 'items.product'] });
  }

  async getOrdersId(orderId: number): Promise<Order> {
    return await this.ordersRepository.findOne({
      where: { id: orderId },
      relations: ['items', 'items.product']
    });
  }  


  async exportOrdersToPdf(orderId: number): Promise<Buffer> {
    const order = await this.getOrdersId(orderId); // Obtener un solo pedido
  
    // Definir fuentes correctamente
    const fonts = {
      Roboto: {
        normal: '../../fonts/Roboto-Regular.ttf',
        bold: '../../fonts/Roboto-Bold.ttf',
        italics: '../../fonts/Roboto-Italic.ttf',
        bolditalics: '../../fonts/Roboto-BoldItalic.ttf',
      },
    };
  
    const printer = new PdfPrinter(fonts);
  
    // Estructura del contenido del PDF
    const docDefinition = {
      content: [
        { text: 'Listado de Pedidos', style: 'header' },
        { text: `Código Pedido: ${order.id}`, style: 'subheader', margin: [0, 10, 0, 15] },
        {
          style: 'subheader',
          margin: [0, 10, 0, 5],
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              ['Producto', 'Cantidad', 'Precio', 'Subtotal'],
              ...order.items.map((item) => [
                item.product.name,
                item.quantity,
                `$${item.product.price}`,
                `$${item.product.price * item.quantity}`,
              ]),
            ],
          },
        },
        { text: `Total: $${order.total_amount}`, style: 'subheader', margin: [0, 10, 0, 15] }, // Agregar el total al final
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
        },
      },
    };
  
    // Crear el documento PDF
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    const chunks: Buffer[] = [];
  
    return new Promise((resolve, reject) => {
      pdfDoc.on('data', (chunk) => {
        chunks.push(chunk);
      });
      pdfDoc.on('end', () => {
        const result = Buffer.concat(chunks);
        resolve(result);
      });
      pdfDoc.on('error', (err) => {
        reject(err);
      });
      pdfDoc.end();
    });
  }






  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
