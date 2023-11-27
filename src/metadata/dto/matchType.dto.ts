import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class matchTypeDTO {
  @Field()
  matchType: number; // 매치 타입 식별자

  @Field()
  desc: string; // 매치 타입 설명
}
