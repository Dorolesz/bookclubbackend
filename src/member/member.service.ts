import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}

  async createMember(createMemberDto: CreateMemberDto) {
    return await this.prisma.members.createMember();
  }

  async getAllMember() {
    return await this.prisma.members.getAllMember();
  }

  async getMemberById(id: number) {
    return this.prisma.members.getMemberById;
  }

  async updateMember(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  async removeMember(id: number) {
    return `This action removes a #${id} member`;
  }
}
