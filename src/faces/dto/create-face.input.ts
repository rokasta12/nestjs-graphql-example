import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateFaceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @IsAlpha()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  trainingFinishedAt: string;

  @Field(() => Boolean, {
    description: 'Example field (placeholder)',
    defaultValue: false,
  })
  isModelTrained: boolean;

  @Field(() => String, { description: 'Training output files', nullable: true })
  ctpkOutputUrl?: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  userId: number;
}
