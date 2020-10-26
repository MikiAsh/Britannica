import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '@services/data.service';
import { Post } from '@app/models/Post'
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

  constructor(private dataService: DataService) {}

  posts: Post[];
  sub: Subscription;

  ngOnInit(): void {
    this.sub = this.dataService.postsUpdated$.subscribe(posts => {this.posts = posts; console.log('posts:', posts)});
  }

  add(): void {
    const newPost = {author: 'toto', message: 'new one', create_date: 2};
    this.dataService.addPost(newPost);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
