import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateFaceInput } from './dto/create-face.input';
import { UpdateFaceInput } from './dto/update-face.input';
import { Face } from './entities/face.entity';

@Injectable()
export class FacesService {
  constructor(
    @InjectRepository(Face) private facesRepository: Repository<Face>,
    private userService: UsersService,
  ) {}

  async create(createFaceInput: CreateFaceInput) {
    const newFace = await this.facesRepository.create(createFaceInput);

    return this.facesRepository.save(newFace);
  }

  async findAll(): Promise<Face[]> {
    const facesAll = await this.facesRepository.find(); // Select * From Face

    return facesAll;
  }

  async findOne(id: number): Promise<Face> {
    const face = await this.facesRepository.findOne({
      where: { id },
    }); // Select * From Face Where id = id

    return face;
  }
  async getFacesOwnerUser(userId: number) {
    const user = await this.userService.findOne(userId);

    return user;
  }

  update(id: number, updateFaceInput: UpdateFaceInput) {
    return `This action updates a #${id} face`;
  }

  remove(id: number) {
    return `This action removes a #${id} face`;
  }
}
