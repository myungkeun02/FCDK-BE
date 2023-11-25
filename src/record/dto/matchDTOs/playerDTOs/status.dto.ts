import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

// StatusDTO
@ObjectType()
export class StatusDTO {
  @Field(() => Int)
  shoot: number; // 슛 수

  @Field(() => Int)
  effectiveShoot: number; // 유효 슛 수

  @Field(() => Int)
  assist: number; // 어시스트 수

  @Field(() => Int)
  goal: number; // 득점 수

  @Field(() => Int)
  dribble: number; // 드리블 거리(야드)

  @Field(() => Int)
  intercept: number; // 인터셉트 수

  @Field(() => Int)
  defending: number; // 디펜딩 수

  @Field(() => Int)
  passTry: number; // 패스 시도 수

  @Field(() => Int)
  passSuccess: number; // 패스 성공 수

  @Field(() => Int)
  dribbleTry: number; // 드리블 시도 수

  @Field(() => Int)
  dribbleSuccess: number; // 드리블 성공 수

  @Field(() => Int)
  ballPossesionTry: number; // 볼 소유 시도 수

  @Field(() => Int)
  ballPossesionSuccess: number; // 볼 소유 성공 수

  @Field(() => Int)
  aerialTry: number; // 공중볼 경합 시도 수

  @Field(() => Int)
  aerialSuccess: number; // 공중볼 경합 성공 수

  @Field(() => Int)
  blockTry: number; // 블락 시도 수

  @Field(() => Int)
  block: number; // 블락 성공 수

  @Field(() => Int)
  tackleTry: number; // 태클 시도 수

  @Field(() => Int)
  tackle: number; // 태클 성공 수

  @Field(() => Int)
  yellowCards: number; // 옐로카드 수

  @Field(() => Int)
  redCards: number; // 레드카드 수

  @Field(() => Float)
  spRating: number; // 선수 평점
}
