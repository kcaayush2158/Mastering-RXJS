import { Component, OnInit } from '@angular/core';
import { takeLast } from 'rxjs';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.scss']
})
export class TakeLastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(500).pipe(take(10),takeLast(10))
    .subscribe((data) =>{
      console.log(data);
    })
  }

}
