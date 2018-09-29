import { Component, OnInit } from '@angular/core';
import {LoggerService} from './../../logger.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private screenLogger: LoggerService) { }

  ngOnInit() {
    this.screenLogger.emitChange('Сообщение от компонента Страница1');
  }

}
