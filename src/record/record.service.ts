import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UserInfo } from './dto/userInfo.dto';
import { UserMaxDivision } from './dto/userMaxDivision.dto';
import { IGetUserMatchRecordInput } from './interfaces/record-service.interface';

@Injectable()
export class RecordService {
  private async callUserApi(url: string): Promise<any> {
    try {
      const apiKey = process.env.EA_SPORTS_FC_ONLINE_API_KEY;
      const result = await axios.get(url, {
        headers: { Authorization: apiKey },
      });
      return result.data;
    } catch (error) {
      throw new Error(`API call failed: ${error.message}`);
    }
  }

  async getUserInfo(nickname: string): Promise<UserInfo> {
    const url = `https://public.api.nexon.com/openapi/fconline/v1.0/users?nickname=${nickname}`;
    const result = this.callUserApi(url);
    console.log(result);
    return result;
  }

  async getUserMaxDivision(accessId: string): Promise<UserMaxDivision[]> {
    const url = `https://public.api.nexon.com/openapi/fconline/v1.0/users/${accessId}/maxdivision`;
    const result = this.callUserApi(url);
    console.log(result);
    return result;
  }

  async getUserMatchRecord({
    getUserMatchRecordInput,
  }: IGetUserMatchRecordInput): Promise<string[]> {
    try {
      const { nickname, matchType, offset, limit } = getUserMatchRecordInput;
      const userInfo = await this.getUserInfo(nickname);
      const accessId = userInfo.accessId;
      const url = `https://public.api.nexon.com/openapi/fconline/v1.0/users/${accessId}/matches?matchtype=${matchType}&offset=${offset}&limit=${limit}`;
      const userMatchRecord = await this.callUserApi(url);
      console.log(userMatchRecord);
      console.log(userMatchRecord.length);
      return userMatchRecord;
    } catch (error) {
      throw new Error(`Failed to get user match record: ${error.message}`);
    }
  }
}
