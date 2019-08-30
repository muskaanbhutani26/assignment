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

  triggerSearchOnEnter(){
    const searchQuery = this.searchForm.get('searchInput').value;
    if(searchQuery){
      this.searchShips(searchQuery);
    }
  }

  clearSearchInput(){
    this.searchForm.get('searchInput').patchValue('');
  }

  searchShips(data){
    console.log(data);
    this.shipsService.searchShips(data).subscribe((response: any) => {
      this.ships = response;
      this.isLoading = false;
    }, (error) => {
      console.log(error);
    });
  }

}
