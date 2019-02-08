import { Component } from '@angular/core';
import { MainService } from './main.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService } from '../auth.service';


 

import { FilterPipe } from './filter.pipe';
// import { MatDialogModule } from '@angular/material';
// export interface DialogData {
//   animal: string;
//   name: string;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = "";
  password = "";
  search = "";
  title = 'Shopping Cart';
  x;
  animal: string;
  name: string;
  dataDB;
  constructor(private service : MainService, private router: Router, private route: ActivatedRoute) { 
    this.service.dataDB().subscribe(x => {this.dataDB = x;
      console.log(this.dataDB);
      this.service.storeDB(this.dataDB)});
   }

  list=['Samsung', 'Apple','Redmi', 'OppO', 'Vivo'];

  create;
  validateUser() {
    var user = {username:this.username, password:this.password};
    console.log(user);
    var obj = this.service.validateUser(user);
    obj.subscribe(x => this.create = x, ()=>{},()=>{
      if (this.create === true) {
        console.log(this.create);
        this.go();
      }
    });
  }
  fun1()
  {
    console.log(54);
  }

  go() {
    document.getElementById('id01').style.display = "none";
    document.getElementById('loghide').style.display = "none";
    document.getElementById('reghide').style.display = "none";
    document.getElementById('name').style.display = "block";
  }
    // onSignIn(googleUser) {
    //   alert("ramu");
    //   var profile = googleUser.getBasicProfile();
    //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //   console.log('Name: ' + profile.getName());
    //   console.log('Image URL: ' + profile.getImageUrl());
    //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    //   alert(profile.getId())
    // }
    // signIn(): void {
    //   this.authService.signIn().then(user => {
    //     this.router.navigate(['/home']);
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // }
    
  }