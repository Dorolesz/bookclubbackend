import { IsBoolean, IsDate, IsString } from "class-validator";

export class CreateMemberDto {

  @IsString()
  name: string

  @IsString()
  gender: string;

  @IsDate()
  birth_date: Date

  @IsBoolean()
  banned: boolean

  @IsDate()
  created_at: Date

  @IsDate()
  update_at: Date
}
