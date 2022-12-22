import { CreateFaceInput } from './create-face.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFaceInput extends PartialType(CreateFaceInput) {
  @Field(() => Int)
  id: number;
}
