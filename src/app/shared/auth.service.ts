import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Assume a variable to store the session value
  private session: any;

  constructor(private router: Router) { }

  // Function to simulate the sign-in process
  signIn(username: string, password: string): boolean {
    // Logic to authenticate user and create a session
    // For demonstration, let's assume successful authentication sets the session
    this.session = { username: username, role: 'user' };
    return true;
  }

  // Function to check if the user is signed in
  isLoggedIn(): boolean {
    return !!this.session;
  }

  // Function to get the session value
  getSession(): any {
    return this.session;
  }

  // Function to redirect based on session value
  redirectToDashboardOrLogin(): void {
    if (this.isLoggedIn()) {
      // Redirect to the dashboard page if the session is available
      this.router.navigate(['/dashboard']);
    } else {
      // Redirect to the login page if the session is null
      this.router.navigate(['/login']);
    }
  }

  // Function to simulate sign out by clearing the session
  signOut(): void {
    this.session = null;
    // Redirect to the login page after signing out
    this.router.navigate(['/login']);
  }
}
