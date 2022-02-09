import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {StoreService} from "./services/store.service";
import {FormGroup} from "@angular/forms";
import {TreeLoaderBase} from "./modules/shared/components/tree/helpers/treeLoaderBase";
import {ExecutiveGroupTreeLoader} from "./modules/shared/components/tree/helpers/executiveGroupTreeLoader";
import {ExecutiveTreeLoader} from "./modules/shared/components/tree/helpers/executiveTreeLoader";
import {BuildExecutiveForm, BuildExecutiveGroupForm} from "./modules/data-panels/panels/form-helpers";
import {DataTye} from "./enums";
import {Executive} from "./models/executive.model";
import {ExecutiveGroup} from "./models/executiveGroup.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public env = environment;

  public TreeLoaders: TreeLoaderBase<any>[] = [];

  constructor(
    private store: StoreService
  ) {
  }

  public DataType = DataTye;
  public ActiveFormGroup: FormGroup | null = null;
  public FormType: DataTye | null = null;
  public ActiveData: Executive | ExecutiveGroup | null = null;

  public LoadTrees(): void {
    this.TreeLoaders.push(new ExecutiveGroupTreeLoader(
      this.store.GetExecutiveGroups(),
      () => {},
      data => {
        this.ActiveFormGroup = BuildExecutiveGroupForm(data);
        this.FormType = DataTye.ExecGroup;
        this.ActiveData = data;
      }
    ));

    this.TreeLoaders.push(new ExecutiveTreeLoader(
      this.store.GetExecutives(),
      () => {},
      data => {
        this.ActiveFormGroup = BuildExecutiveForm(data);
        this.FormType = DataTye.Exec;
        this.ActiveData = data;
      }
    ));
  }


  public async Update(): Promise<void>{
    if(this.FormType === DataTye.ExecGroup && this.ActiveFormGroup && this.ActiveFormGroup.valid && this.ActiveData){
      const data: ExecutiveGroup = this.ActiveFormGroup.value;
      data.id = this.ActiveData.id;
      data.version = this.ActiveData.version;
      const updatedData = await this.store.UpdateExecutiveGroup(data).toPromise();
      if(updatedData){
        this.ActiveFormGroup = BuildExecutiveGroupForm(updatedData);
        this.ActiveData = updatedData;
      }

    }

    if(this.FormType === DataTye.Exec && this.ActiveFormGroup && this.ActiveFormGroup.valid && this.ActiveData){
      const data: Executive = this.ActiveFormGroup.value;
      data.id = this.ActiveData.id;
      data.version = this.ActiveData.version;
      const updatedData = await this.store.UpdateExecutive(data).toPromise();
      if(updatedData){
        this.ActiveFormGroup = BuildExecutiveForm(updatedData);
        this.ActiveData = updatedData;
      }

    }

  }

  ngOnInit(): void {
    this.LoadTrees()
  }

}

