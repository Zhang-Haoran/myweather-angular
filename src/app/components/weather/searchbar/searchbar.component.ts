import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchValue?: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  handleOnChange(searchValue: string):void{
    this.searchValue = searchValue;
    console.log(this.searchValue)
  }

}
