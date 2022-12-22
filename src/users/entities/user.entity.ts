import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Face } from 'src/faces/entities/face.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  password: string;

  @Column({ nullable: true })
  @OneToMany(() => Face, (face) => face.user)
  @Field(() => [Face], {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  faces?: Face[];
}
