import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../shared/service/notes.service';
import { INote } from '../../../shared/interfaces/INote';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css',
})
export class NotesListComponent implements OnInit {
  constructor(private notesService: NotesService) {}

  notes: INote[] = [];
  filteredNotes: INote[] = [];

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
    this.filteredNotes = [...this.notes];
  }

  onSearch(query: string) {
    query = query.toLowerCase().trim();

    this.filteredNotes = this.notes.filter((note) => {
      const noteTitle = note.title.toLowerCase();
      const noteContent = note.content.toLowerCase();

      return noteTitle.includes(query) || noteContent.includes(query);
    });
  }

  removeNote(id: string): void {
    this.notesService.removeNote(id);
    // Retrieve notes after
    this.filteredNotes = this.notesService.getNotes();
  }
}
