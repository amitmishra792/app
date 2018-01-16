import { FlightInfo } from './../model/flight-info';
import { Component, ElementRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';



import { SearchFlight } from '../model/search-flight';
import { SearchFlightService } from '../service/search-flight.service';
import { AUTOCOMPLETE_OPTION_HEIGHT } from '@angular/material';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent {

  // Declaration of instance variable
  statusCode: number;
  flightInfo: FlightInfo[];
  ELEMENT_DATA: Element[];
  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
  selection = new SelectionModel<Element>(true, []);
  dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);

  searchUserForm = new FormGroup({
    source: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    dateOfJourney: new FormControl('', Validators.required)
  });





  // ELEMENT_DATA: Element[] = [
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  //   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  //   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  //   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  //   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  //   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  //   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  //   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  //   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  //   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  //   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  // ];











  // Create constructor to get service instance
  constructor(private searchFlightService: SearchFlightService) {

  }

  // Handle Login User Here
  onSearchUserFormSubmit(): void {
    let source = '';
    let destination = '';
    let dateOfJourney = '';
    let searchFlight: SearchFlight;


    source = this.searchUserForm.get('source').value.trim();
    destination = this.searchUserForm.get('destination').value.trim();
    dateOfJourney = (this.searchUserForm.get('dateOfJourney').value.trim());
    searchFlight = new SearchFlight(source, destination, dateOfJourney);

    this.searchFlightService.searchFlight(searchFlight.source,
      searchFlight.destination).subscribe(data => this.flightInfo = data);

    // this.ELEMENT_DATA = Array.of(this.allFlightDetails);
alert(this.flightInfo);

    const len = this.flightInfo.length;

    for (let index = 0; index < len; index++) {
      // const element = this.flightInfo[index];
      console.log('Flight ID : ' + this.flightInfo[index].flightId );
      console.log('Flight Name : ' + this.flightInfo[index].flightName);
      console.log('Flight Number : ' + this.flightInfo[index].flightNumber);
      console.log('price : ' + this.flightInfo[index].price);
      this.addFlightInfo(this.flightInfo[index].flightId, this.flightInfo[index].flightName,
        this.flightInfo[index].flightNumber, this.flightInfo[index].price);
    }
  }



  addFlightInfo(flightId, flightName, flightNumber, price) {
    let element = null;
    element = new Element(flightId, flightName, flightNumber, price);
    this.ELEMENT_DATA = new Array();
    this.ELEMENT_DATA.push(element);

  }



















  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }


}



class Element {
  name: string;
  position: string;
  weight: string;
  symbol: string;

  constructor(name, position, weight, symbol) {

  }
}
