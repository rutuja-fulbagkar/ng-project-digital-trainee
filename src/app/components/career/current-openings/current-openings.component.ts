import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-openings',
  templateUrl: './current-openings.component.html',
  styleUrls: ['./current-openings.component.css']
})
export class CurrentOpeningsComponent {
  constructor(private router: Router) { }

  navigateToJobDetails(): void {
    this.router.navigate(['/job-details']);
  }
  navigateToJobDetailsOne(): void {
    this.router.navigate(['/job-details-one']);
  }
  navigateToJobDetailsTwo(): void {
    this.router.navigate(['/job-details-two']);
  }
}
