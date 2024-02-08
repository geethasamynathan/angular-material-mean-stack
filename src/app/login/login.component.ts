import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  public handleError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };
  constructor(private fb: FormBuilder, private authService: AuthService) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    // Check session on component initialization
    this.authService.redirectToDashboardOrLogin();
  }
  username: string = '';
  password: string = '';

  // Function to handle sign-in button click
  onSignInClick(): void {
    if (this.authService.signIn(this.username, this.password)) {
      // Redirect to dashboard after successful sign-in
      this.authService.redirectToDashboardOrLogin();
    } else {
      // Handle authentication failure
      console.log('Authentication failed. Please check your credentials.');
    }
  }
  // username : string ="";
  // password : string ="";
   show: boolean= false;
  submit(){
  console.log("user name is " + this.username)
  //this.clear();
  }
  // clear(){
  // this.username ="";
  // this.password = "";
  // this.show = true;
  // }
}
