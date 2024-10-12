import { Controller, Get, Post, Body, Patch, Res, Req,HttpStatus,Param, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Response, Request} from 'express';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post('createItem')
  async createItem( @Body() data: CreateItemDto,
  @Req() req: Request,
  @Res() res: Response){
    try{
    const details = await this.itemService.createItem(data);
    // console.log('roles',roles);

    return res.status(HttpStatus.OK).json({
      message:'All data has been fetched  successfully',
      success:true,
      data:details
    });
  }
  catch(error){
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    message:'something went wrong',
    success:false,
    })
  }
 }
 
}
