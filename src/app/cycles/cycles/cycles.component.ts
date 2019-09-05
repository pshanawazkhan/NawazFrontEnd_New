import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cycles',
  templateUrl: './cycles.component.html',
  styleUrls: ['./cycles.component.scss']
})
export class CyclesComponent implements OnInit {

  bsValue = new Date();


  constructor() { }

  ngOnInit() {
  }

}
