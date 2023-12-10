import { Observable, catchError, of, retry } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retry-operator',
  templateUrl: './retry-operator.component.html',
  styleUrls: ['./retry-operator.component.scss']
})
export class RetryOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = new Observable((observer)=>{
      observer.next(1);
      observer.next(2);
      observer.error('error');
    });

    source$.pipe(retry(2) , catchError((error) => {
      return of('a', 'b')
    })).subscribe(
      (data)=>{
        console.log(data);
    })

  }

}
