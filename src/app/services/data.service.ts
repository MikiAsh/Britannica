import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Post } from '@app/models/Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  postsUpdated$ = new BehaviorSubject<Post[]>(null);
  posts: Post[] = [
    {  
      author: 'Mike',
      message: 'some test text',
      create_date: 10
    },
    {  
      author: 'Sam',
      message: 'another test text',
      create_date: 12
    },
    {  
      author: 'Lea',
      message: 'yet another test text',
      create_date: 5
    },
  ];

  constructor() {
    if (!window.localStorage.getItem('store')) { // first load
      window.localStorage.setItem('store', JSON.stringify({posts: this.posts}));
    } else {
      this.posts = JSON.parse(window.localStorage.getItem('store')).posts;
      this.postsUpdated$.next(this.posts);
    }
  }

  addPost(post: Post) {
    this.posts = [...this.posts, post].sort((a: Post, b:Post) => (a.create_date > b.create_date) ? 1 : -1);
    this.save()
  }

  save() {
    try {
      window.localStorage.setItem('store', JSON.stringify({posts: this.posts}));
      this.postsUpdated$.next(this.posts);
    } catch (error) {
      console.log('Could not save post. ' + error);
    }
    
  }


}
