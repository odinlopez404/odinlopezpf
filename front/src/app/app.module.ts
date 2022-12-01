import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateAboutComponent } from './update-about/update-about.component'
import { FormsModule } from '@angular/forms';
import { UpdateEducationComponent } from './update-education/update-education.component';
import { CreateEducationComponent } from './create-education/create-education.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { UpdateProyectoComponent } from './update-proyecto/update-proyecto.component';
import { CreateProyectoComponent } from './create-proyecto/create-proyecto.component';
import { SkillComponent } from './skill/skill.component';
import { CreateSkillComponent } from './create-skill/create-skill.component';
import { UpdateSkillComponent } from './update-skill/update-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { interceptorProvider } from './service/interceptor-service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    HomeComponent,
    LoginComponent,
    UpdateAboutComponent,
    UpdateEducationComponent,
    CreateEducationComponent,
    ProyectoComponent,
    UpdateProyectoComponent,
    CreateProyectoComponent,
    SkillComponent,
    CreateSkillComponent,
    UpdateSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
