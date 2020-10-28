import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateNoteComponent } from '@app/create-note/create-note.component'
import { DataService } from '@services/data.service'

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  constructor(public dialog: MatDialog, private dataService: DataService) {}

  ngOnInit(): void {
  }

  popDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = '400px';
    

    const dialogRef = this.dialog.open(CreateNoteComponent, dialogConfig);
    dialogRef.afterClosed().toPromise().then(data =>  data && this.dataService.addPost(data) );
  }
}
