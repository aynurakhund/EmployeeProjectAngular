import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmplooyeeService } from 'src/app/Services/emplooyee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  employees!:Array<any>;
  constructor(private employeeService:EmplooyeeService, private router:Router) { }

  ngOnInit(): void {
    this.employees=this.employeeService.getAll();
    console.log(this.employees);
  }

  addEmployees(){
    this.router.navigate(['/addEmployee'])
  }
  main(){
    this.router.navigate(['/main']);
  }


}
