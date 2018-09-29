import { Component, OnInit } from '@angular/core';
import {LoggerService} from './../logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date = new Date();
  upcase = 'Пример теста';
  number = 5;

  constructor(private screenLogger: LoggerService) { }

  ngOnInit() {
    this.screenLogger.emitChange('Сообщение от компонента Главная страница');
  }


}
