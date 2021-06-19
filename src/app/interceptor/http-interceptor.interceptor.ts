import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import{ GlobalConstants } from '../common/global-constants';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
// import { SnackbarService } from '../services/snackbar.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private spinner: NgxSpinnerService, private _snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinner.show();
    const modifiedReq = request.clone({
      headers: request.headers.set('X-Auth-Token', GlobalConstants.apiKey),
    });
    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMsg = (error.error instanceof ErrorEvent) ?
          `Error: ${error.error.message}` :
          `Error Code: ${error.status},  Message: ${error.message}`;
          this._snackBar.open(errorMsg, 'Wait a minute', {
            duration: 2000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        return throwError(errorMsg);
      })
    ).pipe(
      finalize(() => {
        this.spinner.hide();
      })
    )
  }
}
