import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  click_fun(){
    alert();
  }
       
  isShowDiv = true;  
     
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  }  
// added

  openNav() {
    this.isShowDiv = !this.isShowDiv;  
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) {
      sidenav.style.width = '250px';
    }
  }

  closeNav() {
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) {
      sidenav.style.width = '0';
    }
  }
  
}
