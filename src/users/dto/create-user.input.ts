import { InputType, Int, Field } from '@nestjs/graphql';
import { Face } from 'src/faces/entities/face.entity';

@InputType()
export class CreateUserInput {
  /*   @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number; */

  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  /*  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  password: string; */

  @Field(() => [Face], {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  faces?: Face[];
}
