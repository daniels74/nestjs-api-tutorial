import { AuthGuard } from '@nestjs/passport';

//  whats extends for???
export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
