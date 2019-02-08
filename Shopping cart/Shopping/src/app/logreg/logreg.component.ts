import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service:MainService, private route: ActivatedRoute, private router:Router) { }
  submitted: boolean = false;
  passcheck: boolean = false;
  unamecheck: boolean = false;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      displayName:['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cnfrmPassword: ['', Validators.required]
    });
  }
  displayName="";
  username="";
  email="";
  password="";
  cpass="";
  create:any;
  get f() {
    return this.registerForm.controls;
  }
  list = ['Nehru','Ramu','XXX'];
  user_name_availability() {
    if(this.list.includes(this.username)) {
      this.unamecheck = true;
    } else {
      this.unamecheck = false;
    }
  }
  onSubmit() {
    this.submitted = true;
    this.passcheck = false;
    if(this.password !== this.cpass) {
      this.passcheck = true;
      return;
    }
    if (this.registerForm.invalid) {
      return ;
    } else {
      var userdetails = {username: this.username, email:this.email, password: this.password}
      var obj = this.service.adduser(userdetails);
      obj.subscribe(x => this.create = x, ()=>{}, ()=>{
        if(this.create) {
          this.go();
        }
        
      });
      
    }
    
  }

  go() {
    this.router.navigate(['/home'], { relativeTo: this.route });
  }
}