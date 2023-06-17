import { Component } from '@angular/core';
import { CognitoService } from '../services/cognito.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private cognito: CognitoService) { }

  getUser(){
    this.cognito.getCurrentUser();
  }
}
