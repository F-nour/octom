import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  faEye = faEye;
  id!: string;

  @Input() nameForm!: string | null
  @Input() containerClassName: string = '';
  @Input() labelClassName: string = '';
  @Input() inputClassName: string = '';
  @Input() type: string = 'text';
  @Input() field!: string;
  @Input() label!: string;
  @Input() labelUnvisible!: string;
  @Input() ph: string = '';
  isPwd: boolean = true;
  @Input() formControl: FormControl<any> | any;
  @Input() formControlName!: string;

  @ViewChild(FormControlDirective, { static: true })
  formControlDirective!: FormControlDirective;
  private value!: string;
  private disabled!: boolean;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.id = this.nameForm + new TitleCasePipe().transform(this.field);
    this.isPwd = this.type == 'password';
    this.formControl = new FormControl();
    this.formControlName = this.field
  }

  get control() {
    if (this.controlContainer.control) return this.controlContainer.control.get(this.formControlName);
    return this.formControl
  }


  registerOnTouched(fn: any): void {
    if (this.formControlDirective.valueAccessor)
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    if (this.formControlDirective.valueAccessor)
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    if (this.formControlDirective.valueAccessor)
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  viewPwd() {
    this.type = this.type == "password" ? "text" : "password";
  }

}
