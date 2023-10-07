import { CanActivateFn, Router } from '@angular/router';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('session')) {
    return true;
  } 
  inject(Router).navigate(['']);
  return false;
};
