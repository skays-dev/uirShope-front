import { HttpHeaders } from "@angular/common/http";

export const Headers = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

export const PutHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YourAccessToken'
    })
  };