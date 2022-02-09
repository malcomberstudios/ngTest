import {Component, Input, OnInit} from '@angular/core';
import {PanelBase, PanelComponent} from "../../../shared/components/panel/panel.component";
import {FormControl, FormGroup} from "@angular/forms";
import {BuildExecutiveGroupForm} from "../form-helpers";

@Component({
  selector: 'app-exec-group-name',
  templateUrl: './exec-group-name.component.html',
  styleUrls: ['./exec-group-name.component.scss']
})
export class ExecGroupNameComponent implements OnInit, PanelBase {

  @Input() formGroup: FormGroup = BuildExecutiveGroupForm();
  name: string = "Executive Group Name";

  ngOnInit(): void {
  }

}
