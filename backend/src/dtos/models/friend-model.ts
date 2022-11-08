import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Friend {
  @Field(() => ID)
  _id: string

  @Field(() => Number)
  index: Number

  @Field(() => String)
  picture: String

  @Field(() => Number)
  age: Number

  @Field(() => String)
  eyeColor: String

  @Field(() => String)
  name: String

  @Field(() => String)
  company: String

  @Field(() => String)
  email: String

  @Field(() => String)
  phone: String
}