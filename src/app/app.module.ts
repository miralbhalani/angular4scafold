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
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { UserService } from './user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './utils/APIInterceptor';

const appRoutes: Routes = [
  { path: 'dashboard', component: StudentComponent },
  { path: '', component: StudentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SideMenuComponent,
    TopNavComponent,
    StudentComponent
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
    }],
  bootstrap: [AppComponent,LoginComponent]
})
export class AppModule { 


}
