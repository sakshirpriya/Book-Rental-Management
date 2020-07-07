import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PostBooksComponent } from './post-books/post-books.component';
import { AvailableBooksComponent } from './available-books/available-books.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'contact',component:ContactUsComponent},
  {path: 'postbooks',component: PostBooksComponent},
  {path: 'available/books', component: AvailableBooksComponent},
  {path: '', component:HomeComponent},
  {path: '**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
