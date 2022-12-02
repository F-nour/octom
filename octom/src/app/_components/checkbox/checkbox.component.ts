import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  ngOnInit(): void {
    this.id = this.nameForm + new TitleCasePipe().transform(this.field);
  }

  @Input() nameForm!: string | null
  @Input() containerClassName: string = '';
  @Input() labelClassName: string = '';
  @Input() inputClassName: string = '';
  @Input() field!: string;
  @Input() label!: string;

  @Output() checkboxEmitter: EventEmitter<string> = new EventEmitter<string>();

  emitCheckbox(checkbox:string) {
    this.checkboxEmitter.emit(checkbox);
  }
  id!: string;

}
