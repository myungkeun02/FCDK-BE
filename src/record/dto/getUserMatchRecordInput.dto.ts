import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GetUserMatchRecordInput {
  @Field(() => String, { nullable: true })
  nickname: string | null;

  @Field(() => Int, { nullable: true })
  matchType: number | null;

  @Field(() => Int, { nullable: true })
  offset: number = 0;

  @Field(() => Int, { nullable: true })
  limit: number = 100;
}
// REQ = 닉네임, 매치종류(), 리스트에서 가져올 시작 위치, 리스트에서 가져올 갯수(최대 100개)
