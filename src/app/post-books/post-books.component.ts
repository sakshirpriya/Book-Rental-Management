import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { HttpCallsService } from '../http-calls.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-post-books',
  templateUrl: './post-books.component.html',
  styleUrls: ['./post-books.component.css']
})
export class PostBooksComponent implements OnInit {
  userForm= new FormGroup({})
  constructor(fb:FormBuilder, private http:HttpCallsService, private router:Router) {
    this.userForm = new FormGroup({
      Title: new FormControl(),
      ISBN: new FormControl(),
      Author: new FormControl(),
   });



 
  }   
 
  ngOnInit(): void {
  }
  postData()
  {
    console.log('Data -> ', this.userForm['ISBN']);
    console.log('***************');
    console.log(this.userForm.value);
    let obj={}
    if(this.userForm.value.Title && this.userForm.value.ISBN && this.userForm.value.Author ){
     obj['title']=this.userForm.value.Title
     obj['isbn']=this.userForm.value.ISBN
     obj['author']=this.userForm.value.Author
    }else{
      Swal.fire('Please fill all required fields.')
      return;
    }
    this.http.postBook(obj).subscribe(res=>{
      console.log('RESULTS',res)
      Swal.fire({
        title: "Congratulations!",
        text: "You have succesfully added the book!",
        icon: "success",
      });
      this.userForm.reset()
      

    },err=>{
      console.log(err)
      alert(err.error);
    }) 
    
  }
  }


