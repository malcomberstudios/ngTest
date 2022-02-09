import {Component, Input, OnInit} from '@angular/core';
import {PanelBase} from "../../../shared/components/panel/panel.component";
import {BuildExecutiveDetailsForm} from "../form-helpers";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {ExecutiveGroup} from "../../../../models/executiveGroup.model";
import {StoreService} from "../../../../services/store.service";

@Component({
  selector: 'app-exec-details',
  templateUrl: './exec-details.component.html',
  styleUrls: ['./exec-details.component.scss']
})
export class ExecDetailsComponent implements OnInit, PanelBase {


  @Input() formGroup: FormGroup = BuildExecutiveDetailsForm();
  name: string = "Executive Details";

  $groups: Observable<ExecutiveGroup[]> = this.store.GetExecutiveGroups();

  fakeOffices: string[] = [
    "London", "Paris", "Madrid", "Ireland"
  ]

  constructor(
    private store: StoreService
  ) { }

  ngOnInit(): void {
  }


}
