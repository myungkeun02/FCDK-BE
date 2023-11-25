import { Args, Query, Resolver } from '@nestjs/graphql';
import { MatchService } from './match.service';

@Resolver()
export class RecordResolver {
  constructor(private readonly matchService: MatchService) {}

  @Query()
  get() {}
}
