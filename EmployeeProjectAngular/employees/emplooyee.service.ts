import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmplooyeeService {

  employeeModel:Array<Employee>=[
   {
    firstName:'Aynur',
    lastName:'Akhundzade',
    birthDate:'07 mart 2003',
    department:'IT',
    speciality:'Front-end developer'
   }

  ]
  constructor() { }

  initialAdd(){
  localStorage.setItem('employeeModel',`${this.employeeModel}`);
  }
  addtoTable(newEmployee:any){
    this.employeeModel.push(newEmployee);
    localStorage.removeItem('employeeModel');
    this.initialAdd();
  }

  getAll(){
    return this.employeeModel;
  }
}
