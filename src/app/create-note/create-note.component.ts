import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import { Post } from '@app/models/Post';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  
  noteForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<CreateNoteComponent>, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      author: ['', Validators.required],
      message: ['', Validators.required],
  });
  }

  onSubmit() {
    if (this.noteForm.invalid) {
      return;
    }

    const post: Post = {...this.noteForm.value, create_date: Date.now()};
    this.dialogRef.close(post);
  }

}
