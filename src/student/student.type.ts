import { Field, ObjectType } from '@nestjs/graphql';
import { SubjectType } from 'src/subject/subject.type';

@ObjectType('Student')
export class StudentType {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field((type) => [SubjectType])
  subjects: SubjectType[];
}
