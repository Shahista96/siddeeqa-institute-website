import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  helloMessage:string = "";
  emailId!:string;
  password!:string;

  onLoginBtnClick(){
    
  
  }

  onRegisterBtnClick(){
   
  }

}
