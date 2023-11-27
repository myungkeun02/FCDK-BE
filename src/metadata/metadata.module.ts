import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MetadataService } from './metadata.service';
import { MetadataResolver } from './metadata.resolver';
import { RecordService } from 'src/record/record.service';

@Module({
  imports: [HttpModule],
  providers: [
    MetadataService, //
    MetadataResolver,
    RecordService,
  ],
})
export class RecordModule {}
