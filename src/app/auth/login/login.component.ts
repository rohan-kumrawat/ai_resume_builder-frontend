import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Placeholder for backend API call
    console.log('Logging in with:', this.email, this.password);
    // Navigate to dashboard on success
    this.router.navigate(['/dashboard']);
  }
}
