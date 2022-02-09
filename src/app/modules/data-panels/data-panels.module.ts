import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecGroupNameComponent } from './panels/exec-group-name/exec-group-name.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { ExecTitleComponent } from './panels/exec-title/exec-title.component';
import {EnumToArrayPipePipe} from "../shared/pipes/enum-to-array-pipe.pipe";
import { ExecDetailsComponent } from './panels/exec-details/exec-details.component';
import { ExecTitleAndDetailsComponent } from './panels/exec-title-and-details/exec-title-and-details.component';



@NgModule({
  declarations: [
    ExecGroupNameComponent,
    ExecTitleComponent,
    ExecDetailsComponent,
    ExecTitleAndDetailsComponent,
  ],
  exports: [
    ExecGroupNameComponent,
    ExecTitleComponent,
    ExecDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DataPanelsModule { }
