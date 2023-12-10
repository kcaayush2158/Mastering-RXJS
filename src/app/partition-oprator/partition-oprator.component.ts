import { Component, OnInit } from '@angular/core';
import { of ,partition } from 'rxjs';

@Component({
  selector: 'app-partition-oprator',
  templateUrl: './partition-oprator.component.html',
  styleUrls: ['./partition-oprator.component.scss']
})
export class PartitionOpratorComponent implements OnInit {

  constructor() { }

  //Splits the source Observable into two, one with values that satisfy a predicate, 
  //and another with values that don't satisfy the predicate.
  ngOnInit(): void {
    let source$ = of(1,2,3,4,5,6,7,8,9);
    let data = partition(source$, (value) => value % 2 == 0);
    console.log(data);
  }

}
