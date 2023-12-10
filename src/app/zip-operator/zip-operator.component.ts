import { Component, OnInit } from '@angular/core';
import { of ,zip } from 'rxjs';

@Component({
  selector: 'app-zip-operator',
  templateUrl: './zip-operator.component.html',
  styleUrls: ['./zip-operator.component.scss']
})
export class ZipOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //combine all the observable and returns the single observable
    
    let source$ = of(1,2,3,4);
    let source2$ = of('a','b','c','d');

    zip(source$, source2$).subscribe((data) => {
      console.log(data);
    })
  
  }

}
