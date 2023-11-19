import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class userInfo {
  @Field(() => String)
  accessId: string;

  @Field(() => String)
  nickname: string;

  @Field(() => Int)
  level: number;
}
