import {TreeLoader} from "./treeLoader";
import {map, Observable, of} from "rxjs";
import {TreeData, TreeItem} from "../tree.component";

export class TreeLoaderBase<T> implements TreeLoader<T> {
  create(): void {
  }

  dataRetrieve: Observable<T[]> = of([]);

  itemSelected(data: T): void {
  }

  mapper(data: T[]): TreeItem<T>[] {
    return [{
      text: 'nipple',
      data: data[0],
    }];
  }

  name: string = "";

  public TreeData: TreeData<any> | null = null;

  public GetTreeData(): TreeData<T> {
    const mappedObs = this.dataRetrieve.pipe(
      map(data => this.mapper(data))
    );

    const treeData = new TreeData<T>(mappedObs, this.name, this.create);
    treeData.ItemSetActive.subscribe(data => this.itemSelected(data));
    return treeData;
  }

}
