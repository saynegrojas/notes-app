import { Routes } from '@angular/router';
import { LayoutComponent } from './components/views/layout/layout.component';
import { NotesListComponent } from './components/views/notes-list/notes-list.component';
import { NoteFormComponent } from './components/views/note-form/note-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: NotesListComponent },
      { path: 'form', component: NoteFormComponent },
      { path: ':id', component: NoteFormComponent },
    ],
  },
];
