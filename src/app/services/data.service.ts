import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Post } from '@app/models/Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private postsUpdatedSubject = new BehaviorSubject<Post[]>(null);
  postsUpdated$ = this.postsUpdatedSubject.asObservable();

  posts: Post[] = [];

  constructor() {
    if (!window.localStorage.getItem('store')) { // first load
      window.localStorage.setItem('store', JSON.stringify({posts: this.posts}));
    } else {
      this.posts = JSON.parse(window.localStorage.getItem('store')).posts;
    }
    this.postsUpdatedSubject.next(this.posts);
  }

  addPost(post: Post) {
    this.posts = [...this.posts, post].sort((a: Post, b:Post) => (a.create_date < b.create_date) ? 1 : -1);
    this.save()
  }

  save() {
    try {
      window.localStorage.setItem('store', JSON.stringify({posts: this.posts}));
      this.postsUpdatedSubject.next(this.posts);
    } catch (error) {
      console.log('Could not save post. ' + error);
    }
    
  }


}
