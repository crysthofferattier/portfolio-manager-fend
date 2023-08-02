import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authguardGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router)

  if (auth.isAuthenticated()) {
    return true;
  }

  console.log("No auth");
  router.navigate(['login']);
  return false;
};
