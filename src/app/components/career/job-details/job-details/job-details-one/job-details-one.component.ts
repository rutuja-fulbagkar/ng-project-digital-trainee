import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-details-one',
  templateUrl: './job-details-one.component.html',
  styleUrls: ['./job-details-one.component.css']
})
export class JobDetailsOneComponent {
  constructor(private router: Router) { }

  navigateToJobDetails(): void {
    this.router.navigate(['/career-application-submit']);
  }
}
