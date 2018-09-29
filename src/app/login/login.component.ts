import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {LoggerService} from './../logger.service';

export class User{
  login: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwdValid;
  httpOk;
  httpErrorMsg;
  passwordInfo;

  constructor(private http: HttpClient, private screenLogger: LoggerService) {
    this.httpOk = true;
    this.httpErrorMsg = ''; 
  }

  ngOnInit() {
    this.screenLogger.emitChange('Сообщение от компонента Логин');
  }
  
  user: User = new User();

  onClick = function(){
    const body = {password: this.user.password};
    this.http.post('http://localhost:8080/check', body).subscribe(
      valid => {
        this.httpOk = true; 
        this.passwdValid = valid;
        this.passwordInfo = valid === false ? 'Значение некорректно' : 'Значение корректно';
      },
      error => {this.httpOk = false; this.httpErrorMsg = error.message;}
    );
  }
}
