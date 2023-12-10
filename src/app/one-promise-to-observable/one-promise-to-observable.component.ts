import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-one-promise-to-observable',
  templateUrl: './one-promise-to-observable.component.html',
  styleUrls: ['./one-promise-to-observable.component.scss']
})
export class OnePromiseToObservableComponent implements OnInit ,AfterViewInit{

  postsArray = [
    { title: 'one ', description: 'Description 1' },
    { title: 'two ', description: 'Description 2' }
  ]

  postArrayObservable$ = from(this.postsArray);

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolve the promise. sending data');
    }, 3000);
  });

  promiseObservable$ = from(this.promise);


  constructor() {
    this.postArrayObservable$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('completed');
      }
    });



    this.postArrayObservable$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('promised completed');
      }
    })

  }
  ngAfterViewInit(): void {
      fromEvent(document.getElementById('click-button') !, 'click').subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log('promised completed');
        }
      })
    }



  ngOnInit(): void {
  }

}
