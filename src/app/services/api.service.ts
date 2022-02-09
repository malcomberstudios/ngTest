import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {Executive} from "../models/executive.model";
import {HttpRoot} from "../helpers";
import {ReturnValue} from "../models/returnValue.model";
import {ExecutiveGroup} from "../models/executiveGroup.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) {
  }


  public GetExecutives(): Observable<Executive[]> {
    return this.MakeCall<Executive[]>(`executives`, "GET");
  }

  public GetExecutive(id: number): Observable<Executive> {
    return this.MakeCall<Executive>(`executives/${id}`, "GET");
  }

  public CreateExecutive(data: Executive): Observable<Executive> {
    return this.MakeCall<Executive>(`executives`, "POST", data);
  }

  public GetExecutiveGroups(): Observable<ExecutiveGroup[]> {
    return this.MakeCall<ExecutiveGroup[]>(`executiveGroups`, "GET");
  }

  public UpdateExecutiveGroup(executiveGroup: ExecutiveGroup): Observable<ExecutiveGroup> {
    const cleanData = {
      name: executiveGroup.name,
      version: executiveGroup.version
    }
    return this.MakeCall<ExecutiveGroup>(`executiveGroups/${executiveGroup.id}`, "PUT", cleanData);
  }

  public UpdateExecutive(executive: Executive): Observable<Executive> {
    const cleanData = {...executive};
    cleanData.id = null;
    return this.MakeCall<Executive>(`executives/${executive.id}`, "PUT", cleanData);
  }

  private MakeCall<T>(url: string, type: "GET" | "POST" | "PUT", data?: Partial<T>): Observable<T> {

    let call: Observable<ReturnValue<T>>;
    const completeUrl = `${HttpRoot}/${url}`;
    switch (type) {
      case "GET":
        call = this.httpClient.get<ReturnValue<T>>(completeUrl);
        break;
      case "POST":
        call = this.httpClient.post<ReturnValue<T>>(completeUrl, data);
        break;
      case "PUT":
        call = this.httpClient.put<ReturnValue<T>>(completeUrl, data);
        break;

    }

    return call.pipe(
      map(returnValue => returnValue.value),
      catchError(err => {
        // Call Error message service
        console.log({err});
        throw new Error(`Cannot make call to ${completeUrl}`);
      })
    );


  }


}
