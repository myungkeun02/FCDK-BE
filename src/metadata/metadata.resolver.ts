import { Query, Resolver } from '@nestjs/graphql';
import { MetadataService } from './metadata.service';
import { matchTypeDTO } from './dto/matchType.dto';

@Resolver()
export class MetadataResolver {
  constructor(private readonly metadataService: MetadataService) {}

  @Query(() => [matchTypeDTO])
  async getMatchTypeMetadata(): Promise<matchTypeDTO[]> {
    try {
      return await this.metadataService.matchMetadata();
    } catch (error) {
      throw new Error(`Failed to get user max division: ${error.message}`);
    }
  }
}
