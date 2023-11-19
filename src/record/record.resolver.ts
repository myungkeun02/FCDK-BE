import { Args, Query, Resolver } from '@nestjs/graphql';
import { RecordService } from './record.service';
import { userInfo } from './dto/userInfo.entity';

@Resolver({})
export class RecordResolver {
  constructor(private readonly recordService: RecordService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Query(() => userInfo)
  async getUserInfo(@Args('nickname') nickname: string): Promise<any> {
    return this.recordService.getUserInfo(nickname);
  }
}
