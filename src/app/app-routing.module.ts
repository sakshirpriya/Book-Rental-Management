import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PostBooksComponent } from './post-books/post-books.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: 'home', component:HomeComponent,canActivate: [AuthGuard]},
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'contact',component:ContactUsComponent},
  {path: 'postbooks',component: PostBooksComponent},
  {path: 'available/books', component: AvailableBooksComponent},
  {path: 'issuebooks', component:IssueBookComponent},
  {path: '', component:HomeComponent,canActivate:[AuthGuard]},
  {path: '**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
