import {TreeLoaderBase} from "./treeLoaderBase";
import {Executive} from "../../../../../models/executive.model";
import {Observable} from "rxjs";
import {TreeItem} from "../tree.component";

export class ExecutiveTreeLoader extends TreeLoaderBase<Executive> {
  constructor(public override dataRetrieve: Observable<Executive[]>, public override create: () => void, public override itemSelected: (data: Executive) => void) {
    super();
    this.TreeData = this.GetTreeData();
  }


  override mapper(data: Executive[]): TreeItem<Executive>[] {
    return data.map(e => ({
      text: `${e.lastName}, ${e.firstName}`,
      data: e,
      icon: '',
      children: []
    }));
  }

  override name = "Executive";
}
