import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerComponent',
  templateUrl: './headerComponent.component.html',
  styleUrls: ['./headerComponent.component.css']
})
export class HeaderComponentComponent implements OnInit {
  isLoggedIn = false;
  constructor() { }

  ngOnInit() {
  }

  toggleLogin() {
    this.isLoggedIn= !this.isLoggedIn;
  }

}
