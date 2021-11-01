import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Output() searchValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handleOnChange(searchValue: string):void{
    this.searchValue?.emit(searchValue);
  }



}
