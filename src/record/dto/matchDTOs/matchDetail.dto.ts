import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class MatchDetailDTO {
  @Field(() => Int)
  seasonId: number; // 시즌 ID

  @Field()
  matchResult: string; // 매치 결과 (“승”, “무”, “패”)

  @Field(() => Int)
  matchEndType: number; // 매치종료 타입 (0: 정상종료, 1: 몰수승, 2:몰수패)

  @Field(() => Int)
  systemPause: number; // 게임 일시정지 수

  @Field(() => Int)
  foul: number; // 파울 수

  @Field(() => Int)
  injury: number; // 부상 수

  @Field(() => Int)
  redCards: number; // 받은 레드카드 수

  @Field(() => Int)
  yellowCards: number; // 받은 옐로카드 수

  @Field(() => Int)
  dribble: number; // 드리블 거리(야드)

  @Field(() => Int)
  cornerKick: number; // 코너킥 수

  @Field(() => Int)
  possession: number; // 점유율

  @Field(() => Int)
  offsideCount: number; // 오프사이드 수

  @Field(() => Float)
  averageRating: number; // 경기 평점

  @Field()
  controller: string; // 사용한 컨트롤러 타입 (keyboard / pad / etc 중 1)
}
