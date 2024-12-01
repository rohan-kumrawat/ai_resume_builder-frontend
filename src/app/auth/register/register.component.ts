import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // Placeholder for backend API call
    console.log('Registering with:', this.name, this.email, this.password);
    
    // Navigate to login on success
    this.router.navigate(['/auth/login']);
  }
}
