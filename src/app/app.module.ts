import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule, Routes} from '@angular/router';
import { StudentComponent } from './student/student.component';
import { UserService } from './shared/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './utils/APIInterceptor';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentsCreateComponent } from './students/students-create/students-create.component';
import { StudentsUpdateComponent } from './students/students-update/students-update.component';
import { StudentsViewComponent } from './students/students-view/students-view.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { QueryGeneratorService } from './shared/query-generator.service';


const appRoutes: Routes = [
  { path: 'dashboard', component: StudentsListComponent },
  { path: 'students', component: StudentsListComponent },
  { path: 'students/create', component: StudentsCreateComponent },
  { path: 'students/update/:id', component: StudentsUpdateComponent },
  { path: 'students/view/:id', component: StudentsViewComponent },
  { path: '', component: StudentsListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SideMenuComponent,
    TopNavComponent,
    StudentComponent,
    StudentsListComponent,
    StudentsCreateComponent,
    StudentsUpdateComponent,
    StudentsViewComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    LocalStorageModule.withConfig({
        prefix: 'ingrit',
        storageType: 'localStorage'
    }),
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [UserService,{
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true
    },
    QueryGeneratorService
    ],
  bootstrap: [AppComponent,LoginComponent]
})
export class AppModule { 


}
