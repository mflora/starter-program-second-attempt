import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  myStorage;

  constructor() {
    this.myStorage = window.localStorage;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.myStorage.token;

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    let authReq;
    if (authToken) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken)
      });
    }else {
      authReq = req;
    }

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
