import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { UserService } from '../../service/user.service';

@Injectable()
export class CanActivateAuthGuard implements CanActivate {

    constructor(private flashMessagesService: FlashMessagesService, private router: Router, private userService: UserService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.userService.isLoggedIn())
            return true;
        
        sessionStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
        this.flashMessagesService.show('You are not authorized to access this page. Please login!', { cssClass: 'alert-error alert alert-warning .close', timeout: 2500 });
        return false;
    }
}