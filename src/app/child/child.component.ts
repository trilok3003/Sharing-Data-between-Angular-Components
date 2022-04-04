import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message;
  ourMessage = 'Message From Child';
  @Output() parentMessage = new EventEmitter<string>();
  siblingMessage;
  constructor(public dataService: DataService) { 
    this.dataService.message$.subscribe(res => {
        this.siblingMessage = res;
    })
  }

  ngOnInit() {
    
  }
  sendMessage() {
this.parentMessage.emit('Message From Child');
  }

}