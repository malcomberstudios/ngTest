import {Observable} from "rxjs";
import {TreeItem} from "../tree.component";

export interface TreeLoader<T> {
  name: string;
  dataRetrieve: Observable<T[]>;
  mapper: (data: T[]) => TreeItem<T>[];
  create: () => void;
  itemSelected: (data: T) => void;
}
