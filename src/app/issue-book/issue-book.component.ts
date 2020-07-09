import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpCallsService } from '../http-calls.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {
  issueForm= new FormGroup({})
  constructor(fb:FormBuilder, private http:HttpCallsService, private router:Router) { 
    this.issueForm = new FormGroup({
      ISBN: new FormControl(),
      CardHolder: new FormControl()
     
  });
  }

  ngOnInit(): void {
  }
  issueBook()
  {
    console.log('$$$$$$$$$$$')

    console.log(this.issueForm.value);
    let obj={}
    if(this.issueForm.value.ISBN && this.issueForm.value.CardHolder){
     obj['isbn']=this.issueForm.value.ISBN
     obj['cardHolder']=this.issueForm.value.CardHolder
    }else{
      Swal.fire('Please fill all required fields.')
      return;
    }
    this.http.issueBook(obj).subscribe(res=>{
      console.log('RESULTS',res)
      Swal.fire({
        title: "Congratulations!",
        text: "You have succesfully issued the book!",
        icon: "success",
      });
      this.issueForm.reset()
      

    },err=>{
      console.log(err)
      alert(err.error);
    }) 
    
  }
  }




 


