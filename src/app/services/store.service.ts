import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {ExecutiveGroup} from "../models/executiveGroup.model";
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {addMinutes} from 'date-fns';
import {environment} from "../../environments/environment";
import {Executive} from "../models/executive.model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  public ExecutiveGroupsStore: ExecutiveGroup[] = [];
  private ExecutiveGroupClearCacheDate = addMinutes(new Date(), -10);

  private ExecutivesStore: Executive[] = [];
  private ExecutiveClearCacheDate = addMinutes(new Date(), -10);

  public ExecutiveGroupBehaviour: BehaviorSubject<ExecutiveGroup[]> = new BehaviorSubject<ExecutiveGroup[]>([])
  public ExecutiveBehaviour: BehaviorSubject<Executive[]> = new BehaviorSubject<Executive[]>([])

  constructor(
    private apiService: ApiService
  ) {
  }


  public GetExecutiveGroups(): Observable<ExecutiveGroup[]> {

    const currentTime = new Date();

    if (currentTime > this.ExecutiveGroupClearCacheDate) {
      this.apiService.GetExecutiveGroups().subscribe(data => {

          this.ExecutiveGroupClearCacheDate = addMinutes(new Date(), environment.localCacheTimeInMinutes);
          this.ExecutiveGroupsStore = data;
          this.ExecutiveGroupBehaviour.next(data);
        }
      );

    }

    return this.ExecutiveGroupBehaviour;
  }

  public GetExecutives(): Observable<Executive[]> {
    const currentTime = new Date();


    if (currentTime > this.ExecutiveClearCacheDate) {
      this.apiService.GetExecutives().subscribe(data => {
          this.ExecutiveClearCacheDate = addMinutes(new Date(), environment.localCacheTimeInMinutes);
          this.ExecutivesStore = data;
          this.ExecutiveBehaviour.next(data)
        }
      )
    }

    return this.ExecutiveBehaviour;
  }

  public UpdateExecutiveGroup(executiveGroup: ExecutiveGroup): Observable<ExecutiveGroup> {
    return this.apiService.UpdateExecutiveGroup(executiveGroup).pipe(
      tap(resp => {
        const existing = this.ExecutiveGroupsStore.find(eg => eg.id === resp.id);
        if (existing) {
          existing.name = resp.name;
        }
        this.ExecutiveGroupBehaviour.next(this.ExecutiveGroupsStore);
      })
    );
  }

  public UpdateExecutive(executive: Executive): Observable<Executive>{
    return this.apiService.UpdateExecutive(executive).pipe(
      tap(resp => {
        const existing = this.ExecutivesStore.findIndex(eg => eg.id === resp.id);
        if(existing > -1){
          this.ExecutivesStore.splice(existing, 1, resp);
        }
        this.ExecutiveBehaviour.next(this.ExecutivesStore);
      })
    );
  }


  public ClearExecutiveCache(): void {
    this.ExecutiveGroupClearCacheDate = addMinutes(new Date(), -10);
  }

  public async RefreshExecutiveCache(): Promise<void> {
    this.ClearExecutiveCache()
    await this.GetExecutiveGroups();
  }

}
