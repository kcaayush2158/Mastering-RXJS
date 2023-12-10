import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-two-new-observable',
  templateUrl: './two-new-observable.component.html',
  styleUrls: ['./two-new-observable.component.scss']
})
export class TwoNewObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const newObservable = new Observable<number>((observer) => {
      for(let i = 0 ; i<=5 ;i++){
        observer.next(i);
      }
      observer.complete();
    });



    let observer ={
      next:(data:number) =>console.log(data),
      error: (error :string)=>console.log(error),
      complete:()=>console.log('completed')
    }


    newObservable.subscribe(observer);


}



}
