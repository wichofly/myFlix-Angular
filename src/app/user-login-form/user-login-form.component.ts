import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss'],
})
export class UserLoginFormComponent implements OnInit {
  @Input() userData = { username: '', password: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  // 
  /**
   * This is the function responsible for sending the form inputs to the backend via fetchApiData
   */
  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe({
      next: (result) => {
        // Logic for a successful user registration goes here! (To be implemented)
        localStorage.setItem('user', result.user.username);
        localStorage.setItem('token', result.token);
        this.router.navigate(['movies']) // Redirect to movies (main page)
        this.dialogRef.close(); // This will close the modal on success!
        console.log(result);
        this.snackBar.open('Welcome back!', 'OK', {
          duration: 2000,
        });
      },
    });
  }
}
