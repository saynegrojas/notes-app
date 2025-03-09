export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};

export type NoteWithoutCreatedAt = Omit<Note, 'createdAt'>;
