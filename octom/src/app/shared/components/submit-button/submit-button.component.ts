import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'submit-component',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit {

  @Input() className: string = '';
  path!: string;
  nameForm!: FormGroup;
  @Input() icon!: IconDefinition;
  @Input() iconDescription!: string;
  @Input() disabled!: boolean;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
