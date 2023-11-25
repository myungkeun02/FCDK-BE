import { Field, ObjectType } from '@nestjs/graphql';
import { MatchDetailDTO } from './matchDetail.dto';
import { ShootDTO } from './shoot.dto';
import { ShootDetailDTO } from './shootDetail.dto';
import { PassDTO } from './pass.dto';
import { DefenceDTO } from './defence.dto';
import { PlayerDTO } from './player.dto';

@ObjectType()
export class MatchInfoDTO {
  @Field()
  accessId: string; // 유저 고유 식별자

  @Field()
  nickname: string; // 유저 닉네임

  @Field(() => MatchDetailDTO)
  matchDetail: MatchDetailDTO; // 매치 결과 상세 정보

  @Field(() => ShootDTO)
  shoot: ShootDTO; // 슈팅 정보

  @Field(() => [ShootDetailDTO])
  shootDetail: ShootDetailDTO[]; // 슈팅 별 상세정보 리스트

  @Field(() => PassDTO)
  pass: PassDTO; // 패스 정보

  @Field(() => DefenceDTO)
  defence: DefenceDTO; // 수비 정보

  @Field(() => [PlayerDTO])
  player: PlayerDTO[]; // 경기 사용 선수 정보
}
