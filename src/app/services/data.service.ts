import { Injectable } from '@angular/core';
import { Post } from '@app/models/Post'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  posts: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { 
    window.localStorage.setItem('store', JSON.stringify({posts: this.posts}));
  }

  addPost(post: Post) {
    this.posts = [...this.posts, post].sort((a: Post, b:Post) => (a.create_date > b.create_date) ? 1 : -1);
    this.save()
  }

  save() {
    window.localStorage.setItem('store', JSON.stringify({posts: this.posts}));
  }


}
