import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Face {
  @PrimaryColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  trainingFinishedAt: string;

  @Column()
  @Field(() => String, {
    description: 'Example field (placeholder)',
    defaultValue: false,
  })
  isModelTrained: boolean;

  @Column({ nullable: true })
  @Field(() => String, { description: 'Training output files', nullable: true })
  ctpkOutputUrl?: string;

  @ManyToOne(() => User, (user) => user.faces)
  @Field(() => User, { description: 'Training output files', nullable: true })
  user: User;

  @Column()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  userId: number;
}
