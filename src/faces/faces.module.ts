import { Module } from '@nestjs/common';
import { FacesService } from './faces.service';
import { FacesResolver } from './faces.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Face } from './entities/face.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Face]), UsersModule],
  providers: [FacesResolver, FacesService],
})
export class FacesModule {}
