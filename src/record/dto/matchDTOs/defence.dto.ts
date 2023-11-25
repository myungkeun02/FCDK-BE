import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DefenceDTO {
  @Field(() => Int)
  blockTry: number; // 블락 시도 수

  @Field(() => Int)
  blockSuccess: number; // 블락 성공 수

  @Field(() => Int)
  tackleTry: number; // 태클 시도 수

  @Field(() => Int)
  tackleSuccess: number; // 태클 성공 수
}
