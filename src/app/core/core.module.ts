import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatButtonModule,
  MAT_LABEL_GLOBAL_OPTIONS
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'never'}}
  ]
})
export class CoreModule { }
