import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, tap, switchMap, finalize, distinctUntilChanged } from 'rxjs/operators';
import { ShipsService } from '../ships.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchForm: FormGroup;
  isLoading = false;
  showMagnifyingIcon = true;
  ships = [];

  constructor(private fb: FormBuilder, private shipsService: ShipsService) { }

  ngOnInit() {

    this.searchForm = this.fb.group({
      searchInput: new FormControl('')
    });

    this.searchForm.get('searchInput').valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged()
    ).subscribe((data) => {
        this.isLoading = true;
        this.showMagnifyingIcon = data ? false : true;
        this.searchShips(data);
    }, (error) => {
      console.log(error);
    });

    this.searchShips('');

  }

  clearSearchInput(){
    this.searchForm.get('searchInput').patchValue('');
  }

  searchDummyShips(data){
    console.log(data);
    this.ships = data ? this.shipsService.searchDummyShips(data) : [];
    console.log(this.ships);
  }

  searchShips(data){
    console.log(data);
    this.shipsService.searchShips(data).subscribe((response: any) => {
      this.ships = response;
    }, (error) => {
      console.log(error);
    });
  }

}
