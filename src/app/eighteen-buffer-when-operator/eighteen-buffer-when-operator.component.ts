import { Component, OnInit } from '@angular/core';
import { bufferWhen, interval } from 'rxjs';

@Component({
  selector: 'app-eighteen-buffer-when-operator',
  templateUrl: './eighteen-buffer-when-operator.component.html',
  styleUrls: ['./eighteen-buffer-when-operator.component.scss']
})
export class EighteenBufferWhenOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(500)
    .pipe(
      bufferWhen(()=>{
      return interval(2000);
    }))
    .subscribe((data) => {
      console.log(data);
    })


  }


}
