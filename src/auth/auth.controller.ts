import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Logger,
  ParseIntPipe,
  Post,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Post request by deualt returns code 201
  //// Request email and password which comes bundled with the http request to this backend
  @Post('signup')
  // signup(@Req() req: Request) {
  //   Logger.log(req.body);
  //   return this.authService.signup();
  // }
  // signup(
  //   @Body('email') email: string,
  //   @Body('password', ParseIntPipe) password: string,
  // ) {
  //   console.log({
  //     email,
  //     typeOfEmail: typeof email,
  //     password,
  //     typeOfPassword: typeof password,
  //   });
  //   return this.authService.signup();
  // }
  signup(@Body() dto: AuthDto) {
    // Logger.log({
    //   dto,
    // });
    return this.authService.signup(dto);
  }

  // We dont create anything or post so we could return code 200
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
