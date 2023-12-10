import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const subject = new Subject();
    subject.subscribe(d => console.log('subject subscriber 1 : ' + d));
    subject.next(2020);
    subject.subscribe(d => console.log('subject subscriber 2' + d));

  }

}
