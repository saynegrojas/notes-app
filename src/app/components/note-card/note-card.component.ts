import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css',
})
export class NoteCardComponent implements OnInit {
  constructor() {}

  @Input() title: string = '';
  @Input() content: string = '';
  @Input() link: string = '';

  @Output('remove') removeEvent: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {}

  onRemoveClick() {
    this.removeEvent.emit();
  }
}
