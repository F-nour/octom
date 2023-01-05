import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'input-component',
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
  @Input() labelUnvisible: boolean = false;
  @Input() ph: string = '';
  @Input() required!: boolean
  isPwd!: boolean;
  @Input() formControl: FormControl<any> | any;
  @Input() formControlName!: string;

  @ViewChild(FormControlDirective, { static: true })
  formControlDirective!: FormControlDirective;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.id = this.nameForm + new TitleCasePipe().transform(this.field);
    this.isPwd = this.type == 'password';
    this.formControlName = this.field;
    this.formControl = new FormControl(this.formControlName)
  }

  // get controlName with control
  get control() {
    return this.controlContainer.control ? this.controlContainer.control.get(this.formControlName) : this.formControl;
  }


  // register value on touch
  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor?.registerOnTouched(fn);
  }

    // register value if change
  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor?.registerOnChange(fn);
  }

  // write value of input on object
  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor?.writeValue(obj);
  }

  viewPwd() {
    this.type = this.type == "password" ? "text" : "password";
  }

}
