import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  hide = true;
  Logado = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
