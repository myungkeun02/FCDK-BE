import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MetadataService {
  async callUserApi(url: string): Promise<any> {
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

  async matchMetadata(): Promise<any> {
    const url = `https://static.api.nexon.co.kr/fconline/latest/matchtype.json`;
    const result = this.callUserApi(url);
    console.log(result);
    return result;
  }

  async PLAY(): Promise<any> {
    const url = `https://static.api.nexon.co.kr/fconline/latest/matchtype.json`;
    const result = this.callUserApi(url);
    console.log(result);
    return result;
  }
}
