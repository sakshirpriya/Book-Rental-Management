import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpCallsService } from './http-calls.service';
import { HttpClientModule } from '@angular/common/http';
import { PostBooksComponent } from './post-books/post-books.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { ReturnBooksComponent } from './return-books/return-books.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    NavbarComponent,
    ContactUsComponent,
    PostBooksComponent,
    AvailableBooksComponent,
    ReturnBooksComponent,
    IssueBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpCallsService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
