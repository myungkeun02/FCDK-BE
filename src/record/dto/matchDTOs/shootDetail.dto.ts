import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

// ShootDetailDTO
@ObjectType()
export class ShootDetailDTO {
  @Field(() => Int)
  goalTime: number; // 슛 시간

  @Field(() => Float)
  x: number; // 슛 x좌표 (전체 경기장 기준)

  @Field(() => Float)
  y: number; // 슛 y좌표 (전체 경기장 기준)

  @Field(() => Int)
  type: number; // 슛 종류 (1: normal, 2: finesse, 3: header, 4: lob, 5: flare, 6: low, 7: volley, 8: free-kick, 9: penalty, 10: knuckle, 11: bicycle, 12: super)

  @Field(() => Int)
  result: number; // 슛 결과 (1: on target, 2: off target, 3: goal)

  @Field(() => Int)
  spId: number; // 슈팅 선수 고유 식별자

  @Field(() => Int)
  spGrade: number; // 슈팅 선수 강화 등급

  @Field(() => Int)
  spLevel: number; // 슈팅 선수 레벨

  @Field()
  spIdType: boolean; // 슈팅 선수 임대 여부 (임대선수: true, 비임대선수: false)

  @Field()
  assist: boolean; // 어시스트 받은 골 여부 (받음: true, 안받음: false)

  @Field(() => Int)
  assistSpId: number; // 어시스트 선수 고유 식별자

  @Field(() => Float)
  assistX: number; // 어시스트 x좌표

  @Field(() => Float)
  assistY: number; // 어시스트 y좌표

  @Field()
  hitPost: boolean; // 골포스트 맞춤 여부 (맞춤: true, 못 맞춤: false)

  @Field()
  inPenalty: boolean; // 페널티박스 안에서 넣은 슛 여부 (안: true, 밖: false)
}
