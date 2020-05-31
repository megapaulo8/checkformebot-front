import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';
import { ResultComponent } from './core/pages/result/result.component';

const routes: Routes = [
  { path: 'result/:id', component: ResultComponent }
];
@NgModule({
  imports: [
    GoogleChartsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
