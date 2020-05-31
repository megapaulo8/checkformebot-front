import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
