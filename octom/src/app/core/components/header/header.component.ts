import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pathImage: string;

  search!: FormGroup

  field!: string;

  searchIcon = faSearch;

  constructor( private formBuilder: FormBuilder) {
    this.pathImage = '/assets/images/header/';
    this.field = 'search';
  }

  ngOnInit(): void {
    this.search = this.formBuilder.group({
      search: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  searchSubmit(): void {
    console.log(this.search.value);
    if (this.search.valid) console.log("it's ok!")
  }
}
