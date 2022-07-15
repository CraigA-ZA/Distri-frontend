import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {

  public user: User;
  constructor(
    @Inject(DOCUMENT) public document:Document, 
    public auth: AuthService) {
      this.user = {};
     }
  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      console.log(user)
      if(user) {
       this.user = user
      }
    })
  }

  login(){
    this.auth.loginWithRedirect()
  }
  logout(){
    this.auth.logout({ returnTo: this.document.location.origin })
  }

  get isAuthenticated(){
    return this.auth.isAuthenticated$;
  }

  get currentUser(){
    return this.user;
  }
}
