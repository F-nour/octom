import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  ngOnInit(): void {
  }

  isPwd: boolean = false;
  @Input() labelClassName!: string | null
  @Input() inputClassName!: string | null
  @Input() nameForm!: string;
  @Input() field!: string;
  @Input() type!: string;
  @Input() label!: string;
  @Input() labelUnvisible!: string;
  @Input() ph!: string;


}
