import { Module } from '@nestjs/common';
import { CreateSessionModule } from './create-session/create-session.module';

@Module({
  imports: [CreateSessionModule],
  controllers: [],
  providers: [],
})
export class UsesCasesModule {}
