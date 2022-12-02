import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  ngOnInit(): void {
    if (this.type === 'submit') {
      this.click = this.clickEmitter;
    }
  }


  @Input() type!: string;
  @Output() click!: MethodDecorator | EventEmitter<any|null> | string | void;
  @Input() className!: string;
  @Input() icon!: IconDefinition | null;
  @Input() iconDescription!: string | null;

  clickEmitter: EventEmitter<any|null> = new EventEmitter<any|null>();


}
