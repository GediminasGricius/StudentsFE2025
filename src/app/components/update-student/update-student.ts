import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../services/students-service';

@Component({
  selector: 'app-update-student',
  imports: [FormsModule],
  templateUrl: './update-student.html',
  styleUrl: './update-student.css'
})
export class UpdateStudent {
  public id:String;
  public name:String="";

  constructor (
    private route:ActivatedRoute, 
    private router:Router,
    private studentsService:StudentsService 
  ){
    this.id=this.route.snapshot.params["id"];
    this.studentsService.loadStudent(this.id).subscribe((student)=>{
      this.name=student.name;
    });
    console.log(this.id);
  }

  public updateStudent() {
    this.studentsService.updateStudent(this.id, this.name).subscribe(()=>{
      this.studentsService.loadData();
      this.router.navigate(["/"]);

    });
    
  }

}
