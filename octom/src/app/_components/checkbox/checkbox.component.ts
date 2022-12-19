import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlDirective, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {

  @Input() nameForm!: string | null
  @Input() containerClassName: string = '';
  @Input() labelClassName: string = '';
  @Input() inputClassName: string = '';
  @Input() field!: string;
  @Input() label!: string;

  id!: string;

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
    this.formControlName = this.field;
    this.formControl = new FormControl(this.formControlName)

  }

  // get controlName with control
  get control() {
    if (this.controlContainer.control) return this.controlContainer.control.get(this.formControlName);
    return this.formControl
  }


  // register value on touch
  registerOnTouched(fn: any): void {
    if (this.formControlDirective.valueAccessor)
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

    // register value if change
  registerOnChange(fn: any): void {
    if (this.formControlDirective.valueAccessor)
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  // write value of input on object
  writeValue(obj: any): void {
    if (this.formControlDirective.valueAccessor)
    this.formControlDirective.valueAccessor.writeValue(obj);
  }
}
