import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { RecordModule } from './record/record.module';

@Module({
  imports: [
    RecordModule,
    ConfigModule.forRoot(),
    HttpModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      playground: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
