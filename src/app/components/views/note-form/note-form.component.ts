import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../shared/service/notes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from '../../../shared/models/note-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css',
})
export class NoteFormComponent implements OnInit {
  note: Note = new Note();
  new: boolean = true;

  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if (params['id']) {
        const newNote: Note = this.notesService.getNote(params['id']);
        this.note = newNote;
        this.new = false;
      } else {
        this.new = true;
      }
    });
  }

  onSubmit(form: NgForm) {
    const updatedNote = {
      ...this.note,
      title: form.value.title,
      content: form.value.content,
    };
    const serviceType = this.new ? 'createNote' : 'updateNote';
    this.notesService[serviceType](updatedNote);

    this.router.navigateByUrl('/');
  }

  cancel() {
    this.router.navigateByUrl('/');
  }
}
