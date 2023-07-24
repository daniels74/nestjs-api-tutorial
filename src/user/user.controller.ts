import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  // Put,
  // Req,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
// import { AuthGuard } from '@nestjs/passport';
//import { Request } from 'express';
import { GetUser } from '../auth/decorator/index';
import { JwtGuard } from '../auth/guard/index';
import { UserService } from './user.service';
import { EditUserDto } from './dto/edit-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  // ! usually done in a seperate class
  // ? @UseGuards(AuthGuard('jwt'))
  // // Goal is to use seperate class for the gaurd
  @UseGuards(JwtGuard)
  @Get('me')
  // ! using request is error prone
  //? getMe(@Req() req: Request) {
  //?   return req.user;
  //? }
  // // goal is to make a custom decerator for this fetching of user data
  // // We can acces certain data using name of data in object
  getMe(
    @GetUser() user: User,
    @GetUser('email') email: string,
    @GetUser('id') id: number,
  ) {
    console.log('email: ', email);
    console.log('id: ', id);
    return user;
  }

  @Patch(':id')
  async editUser(
    @Param() params: any,
    //@GetUser('id') id: number,
    @Body() dto: EditUserDto,
  ) {
    return this.userService.editUser(+params.id, dto);
    //return this.userService.editUser(id, dto);
  }
}
