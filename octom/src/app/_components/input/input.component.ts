import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  faEye = faEye;
  id!: string;

  @Input() nameForm !: string | null
  @Input() containerClassName: string = '';
  @Input() labelClassName: string = '';
  @Input() inputClassName: string = '';
  @Input() type: string = 'text';
  @Input() field!: string;
  @Input() label!: string;
  @Input() labelUnvisible!: string;
  @Input() ph: string = '';
  isPwd: boolean = true;

  @Output() inputEmitter: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.id = this.nameForm + new TitleCasePipe().transform(this.field);
    this.isPwd = this.type == 'password';
  }


  emitInput(input:string) {
    this.inputEmitter.emit(input);
  }

  viewPwd(){
    this.type = this.type == "password" ? "text":"password";
  }

}
