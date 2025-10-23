import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentsService } from '../../services/students-service';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudent {
  public name:String="";
  public students:Student[]=[];

  constructor(
    private studentService:StudentsService,
    private http:HttpClient,
    private router:Router
  ){
    this.students=studentService.students;
  }

  public addStudent(){
    this.studentService.addStudent(this.name).subscribe(()=>{
      this.name="";
      this.studentService.loadData();
      this.router.navigate(["/"]);

    });
    
    

  }

}
