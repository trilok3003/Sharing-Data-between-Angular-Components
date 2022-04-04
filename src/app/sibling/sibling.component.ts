import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }
  sendMessage() {
    this.dataService.changeMessage('Hello From Sibling');
  }
}