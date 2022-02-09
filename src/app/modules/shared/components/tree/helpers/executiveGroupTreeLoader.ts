import {TreeLoaderBase} from "./treeLoaderBase";
import {ExecutiveGroup} from "../../../../../models/executiveGroup.model";
import {Observable} from "rxjs";
import {TreeItem} from "../tree.component";

export class ExecutiveGroupTreeLoader extends TreeLoaderBase<ExecutiveGroup> {

  constructor(public override dataRetrieve: Observable<ExecutiveGroup[]>, public override create: () => void, public override itemSelected: (data: ExecutiveGroup) => void) {
    super();
    this.TreeData = this.GetTreeData();
  }


  override mapper(data: ExecutiveGroup[]): TreeItem<ExecutiveGroup>[] {
    return data.map(eg => ({
      text: eg.name,
      data: eg,
      children: [],
      icon: ''
    }));
  }

  override name = "Executive Groups";


}
