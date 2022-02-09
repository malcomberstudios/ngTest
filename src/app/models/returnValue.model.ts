export interface ReturnValue<T>{
  resultCode: number;
  value: T;
  messages: string[];
}
