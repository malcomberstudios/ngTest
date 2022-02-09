import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

export interface PanelBase{
    name: string;
    formGroup: FormGroup
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() Title: string = 'Panel Title';
  @Input() DisplaySave = false;
  @Input() HaasBeenModified = false;

  @Output() DataHasBeenSaved = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public SavedPressed($event: any): void{
    this.DataHasBeenSaved.next($event)
  }


}
