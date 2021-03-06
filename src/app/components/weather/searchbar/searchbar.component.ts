import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Output() searchValue = new EventEmitter<string>();
  @Output() submit = new EventEmitter<Event>();
  constructor() { }

  ngOnInit(): void {
  }

  handleOnChange(searchValue: string):void{
    this.searchValue?.emit(searchValue);
  }
}
