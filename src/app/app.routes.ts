import { Routes } from '@angular/router';
import { AddStudent } from './components/add-student/add-student';
import { Home } from './components/home/home';
import { UpdateStudent } from './components/update-student/update-student';

export const routes: Routes = [
    {path:"", component:Home},
    {path:"add-student", component:AddStudent},
    {path:"student/:id", component:UpdateStudent},
    

];
