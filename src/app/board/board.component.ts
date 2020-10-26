import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private dataService: DataService) {}
  posts = this.dataService.posts;

  ngOnInit(): void {
  }

}
