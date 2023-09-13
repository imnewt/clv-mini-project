import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike, In } from 'typeorm';

import { Permission } from '../entities';
import { IPermissionRepository } from '@domain/interfaces/repositories';
import { FilterDto } from '@domain/dtos';

@Injectable()
export class TypeOrmPermissionRepository implements IPermissionRepository {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  async getPermissions(
    filter: FilterDto,
  ): Promise<{ permissions: Permission[]; total: number }> {
    const { searchTerm, pageNumber, pageSize } = filter;
    const [permissions, total] = await this.permissionRepository.findAndCount({
      where: [
        {
          name: ILike(`%${searchTerm}%`),
        },
      ],
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
    });
    return { permissions, total };
  }

  async getPermissionsByIds(
    permissionIds: string[],
  ): Promise<Permission[] | null> {
    return await this.permissionRepository.find({
      where: {
        id: In(permissionIds),
      },
    });
  }
}