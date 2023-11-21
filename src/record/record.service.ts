import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { userInfo } from './dto/userInfo.dto';
import { userMaxDivision } from './dto/userMaxDivision.dto';

@Injectable({})
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

  async getUserInfo(nickname: string): Promise<userInfo> {
    const url = `https://public.api.nexon.com/openapi/fconline/v1.0/users?nickname=${nickname}`;
    const userInfo = await this.callUserApi(url);
    console.log(userInfo);
    return userInfo;
  }

  async getUserMaxDivision(accessId: string): Promise<userMaxDivision[]> {
    const url = `https://public.api.nexon.com/openapi/fconline/v1.0/users/${accessId}/maxdivision`;
    const userMaxDivision = await this.callUserApi(url);
    console.log(userMaxDivision);
    console.log(userMaxDivision.length);
    return userMaxDivision;
  }

  async getUserMatchRecord(
    nickname: string,
    // getUserMatchRecordInput: IGetUserMatchRecordInput,
  ): Promise<any> {}
}

export interface IGetUserMatchRecordInput {
  accessid: string;
  matchType: number;
  offset: number;
  limit: number;
}
