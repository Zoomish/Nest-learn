import { CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

export class Guard implements CanActivate {

    constructor(private jwtService: JwtService) { }

    canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        try {
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];
            if (!bearer.includes('Bearer') || !token) {
                throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
            }
            const user = this.jwtService.verify(token);
            req.user = user;
            return true;
        } catch (error) {
            throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
        }
    }
}