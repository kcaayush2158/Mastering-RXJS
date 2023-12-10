import { Component, OnInit } from '@angular/core';
import { delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-retry-when-operator',
  templateUrl: './retry-when-operator.component.html',
  styleUrls: ['./retry-when-operator.component.scss'],
})
export class RetryWhenOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let frameworkList = {
      status: '500',
      framework: [
        { id: 1, name: 'Angular' },
        { id: 1, name: 'React' },
      ],
    };

    of(...frameworkList.framework)
      .pipe(
        delay(1000),
        tap((framework) => {
          if (!frameworkList.status.startsWith('2')) {
            throw frameworkList.status;
          }
        })
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        complete: () => {},
        error: (error) => {
          console.log(error);
        },
      });


      setTimeout(()=>{
        if(Math.random() < 0.5){
          frameworkList.status == '200';
        }else{
          frameworkList.status == '400';
        }
      },2000)


  }
}
