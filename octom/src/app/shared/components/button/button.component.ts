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
  }


  @Input() type!: string;
  @Output() click: EventEmitter<any|null> = new EventEmitter<any|null>()
  @Input() className!: string;
  @Input() icon!: IconDefinition | null;
  @Input() iconDescription!: string | null;

}
