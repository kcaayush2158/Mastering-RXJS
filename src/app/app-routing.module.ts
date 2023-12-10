import { Unary } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EighteenBufferWhenOperatorComponent } from './eighteen-buffer-when-operator/eighteen-buffer-when-operator.component';
import { OnePromiseToObservableComponent } from './one-promise-to-observable/one-promise-to-observable.component';
import { SeventeenBufferToggleOpratorComponent } from './seventeen-buffer-toggle-oprator/seventeen-buffer-toggle-oprator.component';
import { SixteenBufferTimerOperatorComponent } from './sixteen-buffer-timer-operator/sixteen-buffer-timer-operator.component';
import { TakeLastComponent } from './take-last/take-last.component';
import { TakeComponent } from './take/take.component';
import { TwoNewObservableComponent } from './two-new-observable/two-new-observable.component';
import { UnsubscribingObservableComponent } from './unsubscribing-observable/unsubscribing-observable.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { AsycSubjectComponent } from './asyc-subject/asyc-subject.component';
import { ZipOperatorComponent } from './zip-operator/zip-operator.component';
import { RetryOperatorComponent } from './retry-operator/retry-operator.component';
import { RetryWhenOperatorComponent } from './retry-when-operator/retry-when-operator.component';
import { PartitionOpratorComponent } from './partition-oprator/partition-oprator.component';

const routes: Routes = [
  {path:'one',component:OnePromiseToObservableComponent},
  {path:'two',component:TwoNewObservableComponent},
  {path:'sixteen',component:SixteenBufferTimerOperatorComponent},
  {path:'seventeen',component:SeventeenBufferToggleOpratorComponent},
  {path:'eighteen',component:EighteenBufferWhenOperatorComponent},
  {path:'eight',component:UnsubscribingObservableComponent},
  {path:'take-operator',component:TakeComponent},
  {path:'take-last',component:TakeLastComponent},
  {path:'async-subject',component:AsycSubjectComponent},
  {path:'behaviour-subject',component:BehaviourSubjectComponent},
  {path:'subject',component:SubjectComponent},
  {path:'replay-subject',component:ReplaySubjectComponent},
  {path:'zip',component:ZipOperatorComponent},
  {path:'partation-operator',component:PartitionOpratorComponent},
  {path:'retry',component:RetryOperatorComponent},
  {path:'retry-when',component:RetryWhenOperatorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
