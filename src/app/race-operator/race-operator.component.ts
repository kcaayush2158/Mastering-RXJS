import { interval ,race ,map} from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race-operator',
  templateUrl: './race-operator.component.html',
  styleUrls: ['./race-operator.component.scss']
})
export class RaceOperatorComponent implements OnInit {
  // race oprator return the first emitted value 
  constructor() { }

  ngOnInit(): void {
    let source$ = interval(1000).pipe(map((v)=> 'first one'+ v));
    let source2$ = interval(2000).pipe(map((v)=> 'second one'+ v));;
    let source3$ = interval(3000).pipe(map((v)=> 'third one'+ v));;

    // output from source$ 
    race(source$,source2$,source3$).subscribe(data=>{
      console.log(data);
    })

  }

}
