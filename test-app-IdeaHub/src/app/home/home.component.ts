import { Component, ElementRef, ViewChild } from '@angular/core';
import { CognitoService, IUser } from '../services/cognito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  @ViewChild('code') code!: ElementRef;

  constructor(private cognito:CognitoService){}

  private user:IUser = {
    email: 'diegoantoniolopezruelas@gmail.com',
    password: 'DiegoAntonio1',
    code: '',
    name: null
  }

  getUser(){
    this.cognito.getCurrentUser();
  }

  signUp(){
    this.cognito.signUp(this.user);
  }

  confirm(){
    this.user.code = this.code.nativeElement.value;
    this.cognito.confirmSignUp(this.user);
  }

  logout(){
    this.cognito.signOut();
  }

  login(){
    this.cognito.signIn(this.user);
  }

  delUser(){
    this.cognito.deleteUser();
  }
}
