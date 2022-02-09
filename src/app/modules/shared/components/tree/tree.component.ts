import {Component, Input, OnInit} from '@angular/core';
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {delay, firstValueFrom, lastValueFrom, Observable, Subject} from "rxjs";

export interface ITreeData<T> {
  title: string;
  create: () => void;
  items: Observable<TreeItem<T>[]>;
}

export class TreeData<T> implements ITreeData<T> {

  public treeControl = new NestedTreeControl<TreeItem<T>>(node => node.children);
  public dataSource = new MatTreeNestedDataSource<TreeItem<T>>()
  public ItemSetActive: Subject<T> = new Subject()
  public Active: TreeItem<T> | null = null;

  constructor(
    public items: Observable<TreeItem<T>[]>,
    public title: string,
    public create: () => void
  ) {
  }

  public GetItems(): void {
    this.items.subscribe(data => this.dataSource.data = data);
  }

  public hasChild = (_: number, node: TreeItem<T>) => !!node.children && node.children.length > 0;

  public ActivateItem(node: TreeItem<T>): void {
    this.Active = node;
    this.ItemSetActive.next(node.data);
  }

}

export interface TreeItem<T> {
  icon?: string;
  text: string;
  data: T;
  children?: TreeItem<T>[];
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() TreeData: TreeData<any> | null = null;
  public IsLoadingData = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  async LoadData(): Promise<void> {
    this.IsLoadingData = true;
    await this.TreeData?.GetItems();
    this.IsLoadingData = false;
  }

}
