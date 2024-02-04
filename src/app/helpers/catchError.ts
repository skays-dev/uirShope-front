import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export function handleError(error: HttpErrorResponse): Observable<never> {
    throw new Error(`Something Wrong in Product Service: ${JSON.stringify(error.message)}`)
  }