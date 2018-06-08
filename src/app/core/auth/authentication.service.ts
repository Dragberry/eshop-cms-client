import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

const loginUrl = 'api/login';

const currentUserToken = 'currentUserToken';
const currentUser = 'currentUser';

@Injectable()
export class AuthenticationService {

    userDetails: any;

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        const response = this.http.post<any>(loginUrl, JSON.stringify({ username: username, password: password }));
        response.subscribe(
            (result: any) => {
                if (result && result.value.token) {
                    if (result.value.token) {
                        localStorage.setItem(currentUserToken, result.value.token);
                        localStorage.setItem(currentUser, JSON.stringify(result.value));
                    }
                    if (result.userDetails) {
                        this.userDetails = result.userDetails;
                    }
                }
            });
        return response;
    }

    logout(): void {
        localStorage.removeItem(currentUserToken);
        localStorage.removeItem(currentUser);
        this.userDetails = undefined;
    }

    isLogged(): boolean {
        return this.userDetails || JSON.parse(localStorage.getItem(currentUser));
    }
}
