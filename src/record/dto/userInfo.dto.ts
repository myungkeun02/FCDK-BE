import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserInfo {
  @Field(() => String, { nullable: true })
  accessId: string | null;

  @Field(() => String, { nullable: true })
  nickname: string | null;

  @Field(() => Int, { nullable: true })
  level: number | null;
}
