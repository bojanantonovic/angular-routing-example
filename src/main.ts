import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideZoneChangeDetection} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {FirstComponent} from './app/first/first.component';
import {SecondComponent} from './app/second/second.component';

const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent
  },
  {
    path: 'second-component',
    component: SecondComponent
  },
];
bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes)]
})
  .catch((err) => console.error(err));
