import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnePromiseToObservableComponent } from './one-promise-to-observable/one-promise-to-observable.component';
import { TwoNewObservableComponent } from './two-new-observable/two-new-observable.component';
import { SeventeenBufferToggleOpratorComponent } from './seventeen-buffer-toggle-oprator/seventeen-buffer-toggle-oprator.component';
import { SixteenBufferTimerOperatorComponent } from './sixteen-buffer-timer-operator/sixteen-buffer-timer-operator.component';
import { EighteenBufferWhenOperatorComponent } from './eighteen-buffer-when-operator/eighteen-buffer-when-operator.component';
import { UnsubscribingObservableComponent } from './unsubscribing-observable/unsubscribing-observable.component';
import { TakeComponent } from './take/take.component';
import { TakeLastComponent } from './take-last/take-last.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsycSubjectComponent } from './asyc-subject/asyc-subject.component';
import { ZipOperatorComponent } from './zip-operator/zip-operator.component';
import { RaceOperatorComponent } from './race-operator/race-operator.component';
import { PartitionOpratorComponent } from './partition-oprator/partition-oprator.component';
import { RetryOperatorComponent } from './retry-operator/retry-operator.component';
import { RetryWhenOperatorComponent } from './retry-when-operator/retry-when-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    OnePromiseToObservableComponent,
    TwoNewObservableComponent,
    SeventeenBufferToggleOpratorComponent,
    SixteenBufferTimerOperatorComponent,
    EighteenBufferWhenOperatorComponent,
    UnsubscribingObservableComponent,
    TakeComponent,
    TakeLastComponent,
    SubjectComponent,
    BehaviourSubjectComponent,
    ReplaySubjectComponent,
    AsycSubjectComponent,
    ZipOperatorComponent,
    RaceOperatorComponent,
    PartitionOpratorComponent,
    RetryOperatorComponent,
    RetryWhenOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
