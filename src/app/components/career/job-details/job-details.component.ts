import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {
  constructor(private router: Router) { }

  navigateToJobDetails(): void {
    this.router.navigate(['/career-application-submit']);
  }
}
