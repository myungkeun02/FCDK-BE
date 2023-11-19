import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable({})
export class RecordService {
  constructor(private readonly httpService: HttpService) {}

  async getUserInfo(nickname: string): Promise<any> {
    try {
      console.log('유저 정보를 불러옵니다.');
      const name = nickname;
      const apiKey = process.env.EA_SPORTS_FC_ONLINE_API_KEY;
      const result = await this.httpService
        .get(
          `https://public.api.nexon.com/openapi/fconline/v1.0/users?nickname=${name}`,
          {
            headers: { Authorization: apiKey },
          },
        )
        .toPromise();
      return result;
    } catch (error) {
      console.error(error);
      throw new Error('유저 정보를 가져오는 도중 에러가 발생하였습니다.');
    }
  }
}
