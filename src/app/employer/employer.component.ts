import { Component } from '@angular/core';

// create public employer class to mock some data 
export class Employer{

  id: number | undefined
  name: string | undefined
  location: string | undefined

}

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
})
export class EmployerComponent {

  // create array of employers for display 
  EMPLOYERS: Employer[] = [

    {id: 500, name: 'Ministery of Community and Social Services', location: 'North York'},
    {id: 501, name: 'BlueCat Networks', location: 'North York'},
    {id: 502, name: 'Rogers', location: 'Barrie'}

  ]

  selectedEmployer: Employer | undefined

  onSelect(employer: Employer): void {

    this.selectedEmployer = employer
    console.log(this.selectedEmployer)

  }

  reset(): void {

    this.selectedEmployer = undefined
  }

}
