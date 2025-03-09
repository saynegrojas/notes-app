import { Injectable } from '@angular/core';
import { INote } from '../interfaces/INote';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor() {
    // Load notes from localStorage on initialization
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
    }
  }

  private notes: INote[] = [];
  private note!: INote;

  getNotes(): INote[] {
    return this.notes;
  }

  getNote(id: string): INote {
    const foundNote = this.notes.find((note) => note.id === id);
    if (foundNote) {
      this.note = foundNote;
    }
    return this.note;
  }
  createNote(note: INote): void {
    this.notes.push(note);
    this.saveNotesToLocalStorage();
  }

  updateNote({ id, title, content }: INote): void {
    const note = this.notes.find((n) => n.id === id);
    if (note) {
      note.title = title;
      note.content = content;
      this.saveNotesToLocalStorage();
    }
  }

  removeNote(id: string): void {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.saveNotesToLocalStorage();
  }

  private saveNotesToLocalStorage(): void {
    const storedNotes = JSON.stringify(this.notes);
    localStorage.setItem('notes', storedNotes);
  }
}
