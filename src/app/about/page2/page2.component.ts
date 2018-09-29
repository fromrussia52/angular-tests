import { Component, OnInit } from '@angular/core';
import {LoggerService} from './../../logger.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private screenLogger: LoggerService) { }

  ngOnInit() {
    this.screenLogger.emitChange('Сообщение от компонента Страница2');
  }

}
