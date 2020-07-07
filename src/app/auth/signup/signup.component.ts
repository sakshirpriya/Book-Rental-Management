import { HttpClientModule } from '@angular/common/http';
import { HttpCallsService } from './../../http-calls.service';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 userForm= new FormGroup({})
  constructor(fb:FormBuilder, private http:HttpCallsService, private router:Router) {
    this.userForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      contact: new FormControl(),
      password: new FormControl()
      
  });

   }

  ngOnInit(): void {
   
  }
  showData()
  {
    //console.log(this.userForm.get('email').value)
    // console.log('***********************')
    console.log(this.userForm.value);
    let obj={}
    if(this.userForm.value.firstname && this.userForm.value.lastname && this.userForm.value.email && this.userForm.value.contact && this.userForm.value.password){
      obj['firstName']=this.userForm.value.firstname
      obj['lastName']=this.userForm.value.lastname
      obj['contact']=this.userForm.value.contact
      obj['email']=this.userForm.value.email
      obj['password']=this.userForm.value.password
    }else{
      alert('Please fill all required fields.')
      return;
    }
    this.http.signUpLoader(obj).subscribe(res=>{
      console.log('RESULTS',res)
      this.router.navigate(['/login'])

    },err=>{
      console.log(err)
      alert(err.error);
    }) 
  }
// call(){
//   console.log('vhg')
// }

  
  
}
