import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private apiURL="https://studentsfe2025-598e7-default-rtdb.europe-west1.firebasedatabase.app";
  public students:Student[]=[];

  public onStudentsListChange=new EventEmitter();
  
  
  constructor(private http:HttpClient){
     this.loadData();
  }

  public loadData(){
    this.http.get<{[key:string]:Student}>(this.apiURL+"/students.json")
      .subscribe((data)=>{
        this.students=[];
        for(let s in data){
          this.students.push({
            id:s,
            name:data[s].name
          });
        }
        this.onStudentsListChange.emit();
      });
  }

  public loadStudent(id:String){
    return this.http.get<Student>(this.apiURL+"/students/"+id+".json");
  }

  public updateStudent(id:String, name:String){
    return this.http.patch(this.apiURL+"/students/"+id+".json", {
      name:name
    });
  }

  
  
  public addStudent(name:String) {
    return this.http.post(this.apiURL+"/students.json", {
      "name":name
    });
  }

  public deleteStudent(i:number){
    this.http.delete(this.apiURL+"/students/"+this.students[i].id+".json")
      .subscribe(()=>{
            this.loadData();
      })
  }
  
}
