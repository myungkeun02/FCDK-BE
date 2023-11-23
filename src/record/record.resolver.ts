import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserInfo } from './dto/userInfo.dto';
import { UserMaxDivision } from './dto/userMaxDivision.dto';
import { RecordService } from './record.service';
import { GetUserMatchRecordInput } from './dto/getUserMatchRecordInput.dto';

@Resolver()
export class RecordResolver {
  constructor(private readonly recordService: RecordService) {}

  @Query(() => UserInfo)
  async getUserInfo(@Args('nickname') nickname: string): Promise<UserInfo> {
    try {
      return await this.recordService.getUserInfo(nickname);
    } catch (error) {
      throw new Error(`Failed to get user info: ${error.message}`);
    }
  }

  @Query(() => [UserMaxDivision])
  async getUserMaxDivision(
    @Args('nickname') nickname: string,
  ): Promise<UserMaxDivision[]> {
    try {
      const userInfo = await this.recordService.getUserInfo(nickname);
      return await this.recordService.getUserMaxDivision(userInfo.accessId);
    } catch (error) {
      throw new Error(`Failed to get user max division: ${error.message}`);
    }
  }

  @Query(() => [String])
  async getUserMatchRecord(
    @Args('getUserMatchRecordInput')
    getUserMatchRecordInput: GetUserMatchRecordInput,
  ): Promise<string[]> {
    try {
      return await this.recordService.getUserMatchRecord({
        getUserMatchRecordInput,
      });
    } catch (error) {
      throw new Error(`Failed to get user match record: ${error.message}`);
    }
  }
}
