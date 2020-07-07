// import { Swal } from 'sweetalert2';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import { from } from 'rxjs';
//import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  constructor(private http: HttpClient) { }
  createHttpOption() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'access_token' : localStorage.getItem('access_token')
      })
    };
    return httpOptions;
  }
  dummyApiCall()
  {
  return  this.http.get('https://jsonplaceholder.typicode.com/comments')
  }

  signUpLoader(body)
  {
    //return this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.http.post('http://192.168.0.144:3000/auth/register',body)
  }
  login(body)
  {
    return this.http.post('http://192.168.0.144:3000/auth/login',body)
  }
  postBook(body)
  {
    console.log(body)
    console.log(this.createHttpOption())
    return this.http.post('http://192.168.0.144:3000/api/book/postBook',body,this.createHttpOption())
 
  }
  availableBooks()
  {
    return this.http.get('http://192.168.0.144:3000/api/book/getBooks',this.createHttpOption())
  }
  updateBook(body){
    return this.http.put('http://192.168.0.144:3000/api/book/updateBook',body,this.createHttpOption())
  }

  deleteBook(isbn){
    return this.http.delete(`http://192.168.0.144:3000/api/book/deleteBook/${isbn}`,this.createHttpOption())
  }
}
