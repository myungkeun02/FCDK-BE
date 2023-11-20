import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class userInfo {
  @Field(() => String)
  accessId: string | null;

  @Field(() => String)
  nickname: string | null;

  @Field(() => Int)
  level: number | null;
}
