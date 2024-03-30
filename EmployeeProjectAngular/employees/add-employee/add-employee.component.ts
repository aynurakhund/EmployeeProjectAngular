import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmplooyeeService } from 'src/app/Services/emplooyee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private employeeService:EmplooyeeService, private router:Router) {}

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required),
      department: new FormControl(null),
      speciality: new FormControl(null, Validators.required),
    });
  }

  initialStep() {
    let newEmployee = {
      firstName: String,
      lastName: String,
      birthDate: String,
      department: String,
      speciality: String,
    };

    newEmployee.firstName = this.employeeForm.get('firstName').value;
    newEmployee.lastName = this.employeeForm.get('lastName').value;
    newEmployee.birthDate = this.employeeForm.get('birthDate').value;
    newEmployee.department = this.employeeForm.get('department').value;
    newEmployee.speciality = this.employeeForm.get('speciality').value;

    this.employeeService.addtoTable(newEmployee);
   console.log(this.employeeForm);
   this.router.navigate(['/employeesTable']);
  }

  check():boolean{
    if(this.employeeForm.get('firstName').valid && this.employeeForm.get('lastName').valid && this.employeeForm.get('birthDate').valid && this.employeeForm.get('speciality').valid && this.employeeService.employeeModel.length<6){
      return true
    }else{
      return false
    }
  }
  showTable(){
    this.router.navigate(['/employeesTable']);
  }
  main(){
    this.router.navigate(['/main']);
  }
}
