import { Router } from '@angular/router';
import { HttpCallsService } from './../http-calls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpCallsService,private router:Router) { }

  ngOnInit(): void {
    // this.http.dummyApiCall().subscribe(res=>{
    //   console.log('DUMMY DATA',res)
    //}) 
    let access_token = localStorage.getItem('access_token')
    if(!access_token.length){
      this.router.navigate(['/login'])
    }
  }

}
