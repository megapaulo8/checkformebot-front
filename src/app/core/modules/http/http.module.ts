import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '../../services/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ Http ]
})
export class HttpModule { }
