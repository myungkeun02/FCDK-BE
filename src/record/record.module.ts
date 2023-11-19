import { Module } from '@nestjs/common';
import { RecordResolver } from './record.resolver';
import { RecordService } from './record.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [
    RecordResolver, //
    RecordService,
  ],
})
export class RecordModule {}
