import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.scss']
})
export class BehaviourSubjectComponent implements OnInit {

  // BehaviorSubject is a special type of Subject whose only different is that it will emit the last value upon a new observer's subscription.
  // A BehaviorSubject holds one value. When it is subscribed it emits the value immediately. A Subject doesn't hold a value.

  // BehaviorSubject is the most used subject in Angular application. There is one state management library in Angular ngRX
  // which is completely designed on BehaviorSubject.
  // In angular application, if you requirement is to pass some initial value to your subscriber even without publishing the data,
  // or you want your subscriber should always get some data even before the subscription. Then behaviorSubject is the solution.
  constructor() { }

  ngOnInit(): void {
    const bSubject = new BehaviorSubject<number>(12);
    // prints 12
    bSubject.subscribe(d => console.log('behaviourSubject subscriber 1 :' + d));
    bSubject.next(200); // emit the value
    // prints 200
    bSubject.subscribe(d => console.log('behaviourSubject subscriber 2 :' + d));

  }

}
