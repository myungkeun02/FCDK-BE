import { Args, Query, Resolver } from '@nestjs/graphql';
import { RecordService } from './record.service';
import { userInfo } from './dto/userInfo.dto';
import { userMaxDivision } from './dto/userMaxDivision.dto';

@Resolver({})
export class RecordResolver {
  constructor(private readonly recordService: RecordService) {}

  @Query(() => userInfo)
  async getUserInfo(
    @Args('nickname', { type: () => String }) nickname: string,
  ): Promise<userInfo> {
    try {
      return await this.recordService.getUserInfo(nickname);
    } catch (error) {
      // 구체적인 에러처리 추가 가능
      throw new Error(`Failed to get user info: ${error.message}`);
    }
  }

  @Query(() => userMaxDivision)
  async getUserMaxDivision(
    @Args('nickname', { type: () => String }) nickname: string,
  ): Promise<userMaxDivision> {
    try {
      const userInfo = await this.recordService.getUserInfo(nickname);
      return await this.recordService.getUserMaxDivision(userInfo.accessId);
    } catch (error) {
      // 구체적인 에러처리 추가 가능
      throw new Error(`Failed to get user max division: ${error.message}`);
    }
  }
}
