import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserMaxDivisionDTO {
  @Field(() => Int, { nullable: true })
  matchType: number | null;

  @Field(() => Int, { nullable: true })
  division: number | null;

  @Field(() => String, { nullable: true })
  achievementDate: string | null;
}
