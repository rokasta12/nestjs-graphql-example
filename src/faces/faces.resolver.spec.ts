import { Test, TestingModule } from '@nestjs/testing';
import { FacesResolver } from './faces.resolver';
import { FacesService } from './faces.service';

describe('FacesResolver', () => {
  let resolver: FacesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacesResolver, FacesService],
    }).compile();

    resolver = module.get<FacesResolver>(FacesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
