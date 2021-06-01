import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Subject, SubjectSchema } from './subject.schema';
import { SubjectService } from './subject.service';
import { SubjectResolver } from './subject.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }]),
  ],
  providers: [SubjectService, SubjectResolver],
})
export class SubjectModule {}
