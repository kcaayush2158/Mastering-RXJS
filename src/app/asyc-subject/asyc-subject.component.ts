import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-asyc-subject',
  templateUrl: './asyc-subject.component.html',
  styleUrls: ['./asyc-subject.component.scss']
})
export class AsycSubjectComponent implements OnInit {

  // AsyncSubject is a variant of a Subject which keeps the last value emitted by a source observable before completion 
  // and sends it to all new subscriptions and as soon as you call complete() method, it sends the last emitted value 
  // to all current subscribers and its future subscribers.

  // Async Subject only hold single value unlike Behaviour and ReplaySubject. So we can related Async Subject with promise 
  // because promises also hold single value and on completion it send the data, the major difference is that promise are 
  // eager and Observables (Async Subject) is lazy , it means promises don't need any subscriber for its execution, it execute
  // immediately but on another hand Observables are lazy it mean they need subscriber to start execution

  // Async Subject could be useful for fetching and caching (one-shot) resources, since generally http.get will emit one response then complete.

  constructor() { }

  ngOnInit(): void {
  
   const asyncSubject$ = new AsyncSubject();
   asyncSubject$.next('value 1');
   asyncSubject$.next('value 2');
   asyncSubject$.next('value 3');
   asyncSubject$.complete();

   //output 3
   asyncSubject$.subscribe(value=> console.log('user 1' + value));

   asyncSubject$.next('value 4'); // ignores the value 
   asyncSubject$.next('value 5'); // ignores the value 
   asyncSubject$.complete();
   
   //output 3
   asyncSubject$.subscribe(value=> console.log('user 2' + value));


  }

}
