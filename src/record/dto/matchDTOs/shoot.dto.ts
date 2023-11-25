import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ShootDTO {
  @Field(() => Int)
  shootTotal: number; // 총 슛 수

  @Field(() => Int)
  effectiveShootTotal: number; // 총 유효슛 수

  @Field(() => Int)
  shootOutScore: number; // 승부차기 슛 수

  @Field(() => Int)
  goalTotal: number; // 총 골 수 (실제 골 수)

  @Field(() => Int)
  goalTotalDisplay: number; // 게임 종료 후 유저에게 노출되는 골 수

  @Field(() => Int)
  ownGoal: number; // 자책 골 수

  @Field(() => Int)
  shootHeading: number; // 헤딩 슛 수

  @Field(() => Int)
  goalHeading: number; // 헤딩 골 수

  @Field(() => Int)
  shootFreekick: number; // 프리킥 슛 수

  @Field(() => Int)
  goalFreekick: number; // 프리킥 골 수

  @Field(() => Int)
  shootInPenalty: number; // 인패널티 슛 수

  @Field(() => Int)
  goalInPenalty: number; // 인패널티 골 수

  @Field(() => Int)
  shootOutPenalty: number; // 아웃패널티 슛 수

  @Field(() => Int)
  goalOutPenalty: number; // 아웃패널티 골 수

  @Field(() => Int)
  shootPenaltyKick: number; // 패널티킥 슛 수

  @Field(() => Int)
  goalPenaltyKick: number; // 패널티킥 골 수
}
