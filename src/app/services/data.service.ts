import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() { }
}
