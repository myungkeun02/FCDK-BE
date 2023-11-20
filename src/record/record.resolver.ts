import { Args, Query, Resolver } from '@nestjs/graphql';
import { RecordService } from './record.service';
import { userInfo } from './dto/userInfo.dto';

@Resolver({})
export class RecordResolver {
  constructor(private readonly recordService: RecordService) {}

  @Query(() => userInfo)
  async getUserInfo(
    @Args('nickname', { type: () => String }) nickname: string,
  ): Promise<any> {
    return this.recordService.getUserInfo(nickname);
  }
}
