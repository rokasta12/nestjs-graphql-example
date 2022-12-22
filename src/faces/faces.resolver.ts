import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { FacesService } from './faces.service';
import { Face } from './entities/face.entity';
import { CreateFaceInput } from './dto/create-face.input';
import { UpdateFaceInput } from './dto/update-face.input';

@Resolver(() => Face)
export class FacesResolver {
  constructor(private readonly facesService: FacesService) {}

  @Mutation(() => Face)
  createFace(@Args('createFaceInput') createFaceInput: CreateFaceInput) {
    return this.facesService.create(createFaceInput);
  }

  @Query(() => [Face], { name: 'faces' })
  findAll() {
    return this.facesService.findAll();
  }

  @ResolveField(() => Face)
  async findOwnerOfFace(@Parent() face: Face) {
    return this.facesService.getFacesOwnerUser(face.userId);
  }

  @Query(() => Face, { name: 'face' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.facesService.findOne(id);
  }

  @Mutation(() => Face)
  updateFace(@Args('updateFaceInput') updateFaceInput: UpdateFaceInput) {
    return this.facesService.update(updateFaceInput.id, updateFaceInput);
  }

  @Mutation(() => Face)
  removeFace(@Args('id', { type: () => Int }) id: number) {
    return this.facesService.remove(id);
  }
}
