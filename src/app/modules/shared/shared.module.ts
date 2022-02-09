import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './components/tree/tree.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { PanelComponent } from './components/panel/panel.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { EnumToArrayPipePipe } from './pipes/enum-to-array-pipe.pipe';
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [
    TreeComponent,
    PanelComponent,
    EnumToArrayPipePipe
  ],
  exports: [
    PanelComponent,
    EnumToArrayPipePipe,
    TreeComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
