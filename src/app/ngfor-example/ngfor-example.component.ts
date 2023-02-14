import { Component } from '@angular/core';
import { DropDown } from './dropdown';
import { Employee } from './employee';

@Component({
  selector: 'app-ngfor-example',
  templateUrl: './ngfor-example.component.html',
  styleUrls: ['./ngfor-example.component.css']
})
export class NgforExampleComponent {

  employees: Employee[] = [
    { firstName: "Syble", lastName: "Braun", email: "Syble.Braun@dummyapis.com", age: 41, contactNumber: "4770491796"  },
    { firstName: "Nakia", lastName: "Connelly", email: "Nakia.Connelly@dummyapis.com", age: 29, contactNumber: "4037090725"  },
    { firstName: "Shayna", lastName: "Hermiston", email: "Shayna.Hermiston@dummyapis.com", age: 47, contactNumber: "4987796297"  },
    { firstName: "Laura", lastName: "Lubowitz", email: "Laura.Lubowitz@dummyapis.com", age: 34, contactNumber: "4963192427"  },
    { firstName: "Jackeline", lastName: "Rice", email: "Jackeline.Rice@dummyapis.com", age: 85, contactNumber: "4679198292"  },
    { firstName: "Kevin", lastName: "Simonis", email: "Kevin.Simonis@dummyapis.com", age: 74, contactNumber: "4593593504"  },
    { firstName: "Samantha", lastName: "Daniel", email: "Samantha.Daniel@dummyapis.com", age: 77, contactNumber: "4419192450"  },
  ];

 empsDropDown: DropDown [] = [
  {key:1, value: "employee"},
  {key:2, value: "admin"},
  {key:3, value: "payroll"},
  {key:4, value: "timesheet"},
 ];

 ShowSelectedDropDown(e: any) {
  console.log(e.target.value);
 }


 deleteRecord(index: number) {
  console.log(index);
  this.employees.splice(index, 1);
 }

 AddNewRecord() {
  this.employees.push({
    firstName: "Catharine", lastName: "Mante", email: "Catharine.Mante@dummyapis.com", age: 65, contactNumber: "4944798923" 
  });
 }

 RefreshRecords() {
  this.employees = [
    { firstName: "Syble", lastName: "Braun", email: "Syble.Braun@dummyapis.com", age: 41, contactNumber: "4770491796"  },
    { firstName: "Nakia", lastName: "Connelly", email: "Nakia.Connelly@dummyapis.com", age: 29, contactNumber: "4037090725"  },
    { firstName: "Shayna", lastName: "Hermiston", email: "Shayna.Hermiston@dummyapis.com", age: 47, contactNumber: "4987796297"  },
    { firstName: "Laura", lastName: "Lubowitz", email: "Laura.Lubowitz@dummyapis.com", age: 34, contactNumber: "4963192427"  },
    { firstName: "Jackeline", lastName: "Rice", email: "Jackeline.Rice@dummyapis.com", age: 85, contactNumber: "4679198292"  },
    { firstName: "Kevin", lastName: "Simonis", email: "Kevin.Simonis@dummyapis.com", age: 74, contactNumber: "4593593504"  },
    { firstName: "Samantha1", lastName: "Daniel", email: "Samantha.Daniel@dummyapis.com", age: 77, contactNumber: "4419192450"  }
  ];
 }

 trackEmployeeRecords(index: number, employee: Employee) {
  return employee.firstName;
 }

}
