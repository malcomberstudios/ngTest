import {Component, Input, OnInit} from '@angular/core';
import {PanelBase} from "../../../shared/components/panel/panel.component";
import {BuildExecutiveTitleForm} from "../form-helpers";
import {FormGroup} from "@angular/forms";
import {Prefixes} from "../../../../enums";

@Component({
  selector: 'app-exec-title',
  templateUrl: './exec-title.component.html',
  styleUrls: ['./exec-title.component.scss']
})
export class ExecTitleComponent implements OnInit, PanelBase {

  constructor() { }

  public Prefixes = Prefixes;

  ngOnInit(): void {
  }

 @Input() formGroup: FormGroup = BuildExecutiveTitleForm();
  name: string = 'Executive Title';

}
