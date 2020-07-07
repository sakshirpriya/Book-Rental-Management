import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpCallsService } from './../../http-calls.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({})
  constructor(fb:FormBuilder, private http:HttpCallsService, private router:Router) {
    this.loginForm = new FormGroup({
      Contact: new FormControl(),
      Password: new FormControl()
     
  });
}



  ngOnInit(): void {
  }
  userLogin(){
    console.log(this.loginForm.value);
    let obj={}
    if(this.loginForm.value.Contact && this.loginForm.value.Password ){
     obj['contact']=this.loginForm.value.Contact
      obj['password']=this.loginForm.value.Password
      // Swal.fire('Sucessfully logged in')

    }else{
      //alert('Please fill all required fields.')
      Swal.fire('Please fill all required fields.')
      return;
    }
    this.http.login(obj).subscribe(res=>{
      console.log('LOGIN DATA ->',res)
      localStorage.setItem('access_token',res['access_token'])
      localStorage.setItem('userCxt',JSON.parse(JSON.stringify(res['userCxt'])))
      this.router.navigate(['/home'])

    },err=>{
      console.log(err)
      alert(err.error);
    }) 
    
  }

  }



