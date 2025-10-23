import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddStudent } from "./components/add-student/add-student";
import { ListStudents } from "./components/list-students/list-students";
import { Navigation } from "./components/navigation/navigation";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddStudent, ListStudents, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studentaiFE2025');
}
