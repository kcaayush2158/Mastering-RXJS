import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubscribing-observable',
  templateUrl: './unsubscribing-observable.component.html',
  styleUrls: ['./unsubscribing-observable.component.scss']
})
export class UnsubscribingObservableComponent implements OnInit {
  timerSubscription  !: Subscription;
  constructor() { }

  ngOnInit(): void {
    const newObservable = interval(1000);

    this.timerSubscription = newObservable.subscribe((data) =>{
      console.log(new Date().toLocaleDateString() +' '+ data);
    } );

  }

  cancelTimer(){
    this.timerSubscription.unsubscribe();
  }
}
