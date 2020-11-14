import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome/fontawesome.module';



@NgModule({
  declarations: [],
  imports: [    
    CommonModule,
    MaterialModule,
    ReactiveFormsModule ,
    FontAwesomeModule,
    FormsModule]
,  exports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,

    ReactiveFormsModule ,
    FormsModule
  ]

})
export class AppSharedModule { }
