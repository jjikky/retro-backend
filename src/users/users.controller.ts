import { Get, HttpStatus, HttpCode, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Controller } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUser: CreateUserDto): null {
    console.log(createUser);
    return null;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findOne(): string {
    return '';
  }
}
