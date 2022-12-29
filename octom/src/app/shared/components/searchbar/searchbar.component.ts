import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'searchbar-component',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  search!: FormGroup
  searchIcon = faSearch;
  field!: string;
  @Input() placeHolder!: string;
  @Input() className!: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.search = this.formBuilder.group({
      search: ['', [Validators.minLength(3)]],
    });
    this.field = 'search';
  }

  searchSubmit(): void {
    console.log(this.search.value);
    if (this.search.valid) console.log("it's ok!")
  }

}
