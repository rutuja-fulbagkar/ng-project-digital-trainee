import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-details-two',
  templateUrl: './job-details-two.component.html',
  styleUrls: ['./job-details-two.component.css']
})
export class JobDetailsTwoComponent {
  constructor(private router: Router) { }

  navigateToJobDetails(): void {
    this.router.navigate(['/career-application-submit']);
  }
}
