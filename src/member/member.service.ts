import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}

  async createMember(createMemberDto: CreateMemberDto) {
    return this.prisma.members.create({ data: createMemberDto });
  }

  async getAllMember() {
    return await this.prisma.members.findMany();
  }

  async getMemberById(id: number) {
    return this.prisma.members.findUnique({
      where: {id}
    });
  }

  async updateMember(id: number, updateMemberDto: UpdateMemberDto) {
    return this.prisma.members.update({
      data: updateMemberDto,
      where: {id}
    });
  }

  async removeMember(id: number) {
    return this.prisma.members.delete({ where: { id } });
  }
}
