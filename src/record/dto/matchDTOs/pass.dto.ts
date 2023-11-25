import { ObjectType, Field, Int } from '@nestjs/graphql';

// PassDTO
@ObjectType()
export class PassDTO {
  @Field(() => Int)
  passTry: number; // 패스 시도 수

  @Field(() => Int)
  passSuccess: number; // 패스 성공 수

  @Field(() => Int)
  shortPassTry: number; // 숏 패스 시도 수

  @Field(() => Int)
  shortPassSuccess: number; // 숏 패스 성공 수

  @Field(() => Int)
  longPassTry: number; // 롱 패스 시도 수

  @Field(() => Int)
  longPassSuccess: number; // 롱 패스 성공 수

  @Field(() => Int)
  bouncingLobPassTry: number; // 바운싱 롭 패스 시도 수

  @Field(() => Int)
  bouncingLobPassSuccess: number; // 바운싱 롭 패스 성공 수

  @Field(() => Int)
  drivenGroundPassTry: number; // 드리븐 땅볼 패스 시도 수

  @Field(() => Int)
  drivenGroundPassSuccess: number; // 드리븐 땅볼 패스 성공 수

  @Field(() => Int)
  throughPassTry: number; // 스루 패스 시도 수

  @Field(() => Int)
  throughPassSuccess: number; // 스루 패스 성공 수

  @Field(() => Int)
  lobbedThroughPassTry: number; // 로빙 스루 패스 시도 수

  @Field(() => Int)
  lobbedThroughPassSuccess: number; // 로빙 스루 패스 성공 수
}
