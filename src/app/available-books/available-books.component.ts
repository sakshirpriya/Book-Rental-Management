import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from '../http-calls.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
declare var $ :any;

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {
  datas:any=[];
  $:any
  formTitle:any;
  editForm=new FormGroup({})
  constructor(fb:FormBuilder, private http:HttpCallsService,private router:Router) { 
    this.editForm= new FormGroup({
      Title:new FormControl(),
      Author:new FormControl(),
      Isbn:new FormControl(),
      IsActive:new FormControl()
    });
  }

  ngOnInit(): void {
    
    this.http.availableBooks().subscribe(res=>{
      this.datas=res;
      console.log('AVAILABLE BOOKS ->',res)
    })
  }

  editBook(book){
    $('#exampleModal').modal('show')
    this.formTitle='edit book'
    this.editForm.patchValue({
      Title:book.title,
      Isbn:book.isbn,
      Author:book.author,
      IsActive:book.active
    })
    console.log(book)
  }
  updateBook()
  {
    console.log(this.editForm.value);
    let obj={}
    if(this.editForm.value.Title && this.editForm.value.Author && this.editForm.value.Isbn){
      obj['title']=this.editForm.value.Title
      obj['author']=this.editForm.value.Author
      obj['isbn']=this.editForm.value.Isbn
      obj['active']=this.editForm.value.IsActive

    }else{
      alert('Please fill all required fields.')
      return;
    }
    console.log('OBJECT ',obj)
    this.http.updateBook(obj).subscribe(res=>{
      Swal.fire({
        title: "Congratulations!",
        text: "You have succesfully added the book!",
        icon: "success",
      });
      this.editForm.reset()
    $('#exampleModal').modal('hide')
      this.ngOnInit
    },err=>{
      console.log(err)
      alert(err.error);
    }) 
  }
  deleteBook(isbn)
  {
     this.http.deleteBook(isbn).subscribe(res=>{
      Swal.fire({
        title: "Congratulations!",
        text: "You have succesfully deleted the book!",
        icon: "warning",
      });
     
      // $('#exampleModal').modal('hide')
        this.ngOnInit
      },err=>{
        console.log(err)
        alert(err.error);
     })
  }

}
