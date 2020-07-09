import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
  isLogin:any;
  ngOnInit(): void {
   localStorage.getItem('access_token')?this.isLogin=true:this.isLogin=false
   console.log(this.isLogin)
   console.log(typeof this.isLogin)

  }
  logout()
  {
    localStorage.removeItem('access_token')
    localStorage.removeItem('userCxt')
    this.isLogin=false
    this.router.navigate(['/login'])
  }

}
