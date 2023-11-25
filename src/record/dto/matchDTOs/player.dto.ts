import { ObjectType, Field, Int } from '@nestjs/graphql';
import { StatusDTO } from './playerDTOs/status.dto';

// PlayerDTO
@ObjectType()
export class PlayerDTO {
  @Field(() => Int)
  spId: number; // 선수 고유 식별자

  @Field(() => Int)
  spPosition: number; // 선수 포지션

  @Field(() => Int)
  spGrade: number; // 선수 강화 등급

  @Field(() => StatusDTO)
  status: StatusDTO; // 선수 경기 스탯, StatusDTO 타입입니다.
}
