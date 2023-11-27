import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserInfoDTO } from './dto/userInfo.dto';
import { UserMaxDivisionDTO } from './dto/userMaxDivision.dto';
import { RecordService } from './record.service';
import { GetUserMatchRecordInputDTO } from './dto/getUserMatchRecordInput.dto';
import { MatchDTO } from './dto/match.dto';

@Resolver()
export class RecordResolver {
  constructor(private readonly recordService: RecordService) {}

  @Query(() => UserInfoDTO)
  async getUserInfo(@Args('nickname') nickname: string): Promise<UserInfoDTO> {
    try {
      return await this.recordService.getUserInfo(nickname);
    } catch (error) {
      throw new Error(`Failed to get user info: ${error.message}`);
    }
  }

  @Query(() => [UserMaxDivisionDTO])
  async getUserMaxDivision(
    @Args('nickname') nickname: string,
  ): Promise<UserMaxDivisionDTO[]> {
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
    getUserMatchRecordInputDTO: GetUserMatchRecordInputDTO,
  ): Promise<string[]> {
    try {
      return await this.recordService.getUserMatchRecord({
        getUserMatchRecordInputDTO,
      });
    } catch (error) {
      throw new Error(`Failed to get user match record: ${error.message}`);
    }
  }

  @Query(() => MatchDTO)
  async getMatchDetailRecord(
    @Args('matchId') matchId: string,
  ): Promise<MatchDTO> {
    try {
      return await this.recordService.getMAtchDetailRecord(matchId);
    } catch (error) {
      throw new Error(`Failed to get user match record: ${error.message}`);
    }
  }
}
