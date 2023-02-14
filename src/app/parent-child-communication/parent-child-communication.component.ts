import { Component } from '@angular/core';
import { Employee } from '../ngfor-example/employee';

@Component({
  selector: 'app-parent-child-communication',
  templateUrl: './parent-child-communication.component.html',
  styleUrls: ['./parent-child-communication.component.css']
})
export class ParentChildCommunicationComponent {

  selectedEmployee: string = "all";

  employees: Employee[] = [
    { fullName: "Syble Braun", email: "Syble.Braun@dummyapis.com", gender: 'male', age: 41, contactNumber: "4770491796.1234"  },
    { fullName: "Nakia Connelly", email: "Nakia.Connelly@dummyapis.com", gender: 'male', age: 29, contactNumber: "4037090725.4343"  },
    { fullName: "Shayna Hermiston", email: "Shayna.Hermiston@dummyapis.com", gender: 'male', age: 47, contactNumber: "4987796297"  },
    { fullName: "Laura Lubowitz", email: "Laura.Lubowitz@dummyapis.com", gender: 'Female', age: 34, contactNumber: "4963192427"  },
    { fullName: "Jackeline Rice", email: "Jackeline.Rice@dummyapis.com", gender: 'male', age: 85, contactNumber: "4679198292"  },
    { fullName: "Kevin Simonis", email: "Kevin.Simonis@dummyapis.com", gender: 'Female', age: 74, contactNumber: "4593593504"  },
    { fullName: "Samantha Daniel", email: "Samantha.Daniel@dummyapis.com", gender: 'Female', age: 77, contactNumber: "4419192450"  },
  ];



   getAllEmployeesCount() {
    return this.employees.length;
   }

   getFemaleEmployeeCount() {
    return this.employees.filter(x => x.gender?.toLowerCase() === 'female').length;
   }

   getMaleEmployeeCount() {
    return this.employees.filter(x => x.gender?.toLowerCase() === 'male').length;
   }

   radiobtnfromChildEvent(value: any) {
    console.log(value);
    this.selectedEmployee = value;
   }

}
