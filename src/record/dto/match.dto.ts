import { ObjectType, Field, Int } from '@nestjs/graphql';
import { MatchInfoDTO } from './matchDTOs/matchInfo.dto';

@ObjectType()
export class MatchDTO {
  @Field()
  matchId: string; // 매치 고유 식별자

  @Field()
  matchDate: string; // 매치 일자 (ex. 2019-05-13T18:03:10)

  @Field(() => Int)
  matchType: number; // 매치 종류 (/metadata/matchtype API 참고)

  @Field(() => [MatchInfoDTO])
  matchInfo: MatchInfoDTO[]; // 매치 참여 플레이어별 매치 내용 상세 리스트
}
