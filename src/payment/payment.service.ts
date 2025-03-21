import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async createPayment(createPaymentDto: CreatePaymentDto) {
    return this.prisma.payment.create({ data: createPaymentDto });
  }

  async getAllPayment() {
    return this.prisma.payment.findMany();
  }

  async getPaymentById(id: number) {
    return this.prisma.payment.findUnique({
      where: {id}
    });
  }

  async updatePayment(id: number, updatePaymentDto: UpdatePaymentDto) {
      return this.prisma.payment.update({
        data: updatePaymentDto,
        where: {id}
      });
    }

  async removePayment(id: number) {
    return this.prisma.payment.delete({ where: { id } });
  }
}
