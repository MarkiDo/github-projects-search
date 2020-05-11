import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectElementComponent } from './project-element.component';

@NgModule({
  declarations: [ProjectElementComponent],
  imports: [
    CommonModule
  ],
  exports: [ProjectElementComponent]
})
export class ProjectElementModule { }
