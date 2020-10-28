import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  
  noteForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

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
    console.table(this.noteForm.value);
  }

}
