import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Subject')
export class SubjectType {
  @Field()
  _id: string;

  @Field()
  name: string;
}
