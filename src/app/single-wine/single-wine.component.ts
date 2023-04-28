import { Component, OnInit } from '@angular/core';
import {WineService} from "../wine.service";

@Component({
  selector: 'app-single-wine',
  templateUrl: './single-wine.component.html',
  styleUrls: ['./single-wine.component.css']
})
export class SingleWineComponent implements OnInit {

  constructor(private service:WineService) { }

  ngOnInit(): void {
  }

}
