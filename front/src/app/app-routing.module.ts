import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEducationComponent } from './create-education/create-education.component';
import { CreateProyectoComponent } from './create-proyecto/create-proyecto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateAboutComponent } from './update-about/update-about.component';
import { UpdateEducationComponent } from './update-education/update-education.component';
import { UpdateProyectoComponent } from './update-proyecto/update-proyecto.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  { path: 'update-user/:id', component: UpdateAboutComponent },
  { path: 'update-education/:id', component: UpdateEducationComponent },
  { path: 'create-education', component:CreateEducationComponent},
  { path: 'update-proyecto/:id', component: UpdateProyectoComponent },
  { path: 'create-proyecto', component:CreateProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
