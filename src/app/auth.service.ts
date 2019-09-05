import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}
  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    // Check whether the token is expired and return
    // true or false
    return !jwtHelper.isTokenExpired(token);
  }
  public isAdmin(): boolean {
    const token = localStorage.getItem("token");
    const decodedToken = jwtHelper.decodeToken(token);
    console.log("decoded token");
    console.table(decodedToken);
    return !jwtHelper.isTokenExpired(token);
  }
  public getToken(): string {
    const token = localStorage.getItem("token");
    return token;
  }
}
