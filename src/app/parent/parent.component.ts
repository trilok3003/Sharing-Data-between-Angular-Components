import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  message;
  ourMessage;
  @ViewChild(ChildComponent) child;
  siblingMessage;
  constructor(public dataService: DataService) { 
    this.dataService.message$.subscribe(res => {
        this.siblingMessage = res;
    })
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    this.message = this.child.ourMessage;
  }
  onParentMessage(event) {
    console.log(event);
  }
  sendMessage() {
  this.ourMessage = 'Message From Parent';

  }

}