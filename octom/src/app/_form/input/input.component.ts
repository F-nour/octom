import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  ngOnInit(): void {
  }

  @Input() field!: string;
  @Input() type!: string;
  @Input() ph!: string;
}
