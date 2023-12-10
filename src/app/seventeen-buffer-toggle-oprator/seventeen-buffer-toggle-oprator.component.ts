import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { bufferToggle } from 'rxjs';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-seventeen-buffer-toggle-oprator',
  templateUrl: './seventeen-buffer-toggle-oprator.component.html',
  styleUrls: ['./seventeen-buffer-toggle-oprator.component.scss']
})
export class SeventeenBufferToggleOpratorComponent implements OnInit {

  ngOnInit(): void {
    let opening = interval(400).pipe(tap(() => console.log('buffer opened')));
    let closing = () => interval(300).pipe(tap(() => console.log(' buffer closed')));
    interval(100).pipe(
          tap((data) => console.log(data)),
          bufferToggle(opening, closing),
          take(3))
          .subscribe((data) => console.log(data));
  }

}
