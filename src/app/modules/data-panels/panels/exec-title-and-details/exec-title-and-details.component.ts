import {Component, Input, OnInit} from '@angular/core';
import {PanelBase} from "../../../shared/components/panel/panel.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exec-title-and-details',
  templateUrl: './exec-title-and-details.component.html',
  styleUrls: ['./exec-title-and-details.component.scss']
})
export class ExecTitleAndDetailsComponent implements OnInit, PanelBase {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() formGroup: FormGroup = new FormGroup({});
  name: string = "";

}
