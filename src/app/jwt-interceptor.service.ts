import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
declare let toastr;
@Injectable({
  providedIn: "root"
})
export class JwtInterceptorService implements HttpInterceptor {
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
          `body was: ${error.error} boom shakalaka`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.error("intercepting...");
    const cloned = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + "avinash")
    });

    return next.handle(cloned).pipe(catchError(this.handleError));
  }
}
