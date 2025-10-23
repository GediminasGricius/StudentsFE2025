import { Component } from '@angular/core';
import { StudentsService } from '../../services/students-service';
import { CommonModule } from '@angular/common';
import { Student } from '../../models/student';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-students',
  imports: [CommonModule, RouterModule],
  templateUrl: './list-students.html',
  styleUrl: './list-students.css'
})
export class ListStudents {
  public students:Student[]=[];

   constructor(private studentService:StudentsService){
      this.studentService.onStudentsListChange.subscribe(()=>{
          this.students=studentService.students;
      });
    }

    public deleteStudent(i:number){
      this.studentService.deleteStudent(i);

    }

}
