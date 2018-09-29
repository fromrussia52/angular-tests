import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {LoggerService} from './../logger.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private id: number;
  private routeSubscription: Subscription;
     
  constructor(private route: ActivatedRoute, private screenLogger: LoggerService){
        
      //this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit() {
    this.screenLogger.emitChange('Сообщение от компонента О сайте');
  }

}
