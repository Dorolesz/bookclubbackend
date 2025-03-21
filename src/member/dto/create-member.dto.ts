import { IsDate, IsInt } from "class-validator";

export class CreateMemberDto {

  @IsInt()
  member_id: number

  @IsInt()
  amount: number

  @IsDate()
  paid_at: Date
}
