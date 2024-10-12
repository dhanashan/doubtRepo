import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Repository } from 'typeorm';
import { InjectRepository} from '@nestjs/typeorm';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(@InjectRepository(Item)
  private readonly itemRepository:Repository<Item>){}

  async createItem(data:CreateItemDto){
    return await this.itemRepository.save(data)
  }


}
