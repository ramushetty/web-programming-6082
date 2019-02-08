import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: MainService) {  }
  finalCart = [];
  cart;
  totalprice = 0;
  totalQuant = 0;
  promo="";
  ngOnInit() {
    
    this.cart = this.service.getData();
    this.finalCart = this.service.cnfrmedCart();
    console.log(this.finalCart);
    this.total();
  }

  total() {
    this.totalQuant = 0;
    this.totalprice = 0;
    console.log(this.finalCart);
    for(var i = 0; i < this.finalCart.length; i++) {
      this.totalprice = this.totalprice +  (this.finalCart[i].quantity * this.cart[this.finalCart[i].ind].price);
      this.totalQuant = this.totalQuant + this.finalCart[i].quantity;
      console.log(this.totalQuant);
    }
  }
  remove(i) {
    this.finalCart.splice(i, 1);
    this.total();
  }

  cartfUpdate() {
    this.service.checkOutCart(this.finalCart);
    this.cnfrm();
  }

  resp;
  cnfrm() {
    // alert("Haii");
    this.service.cfrm();
  }
  promdiv;
  checkPromo() {
    this.promdiv = true;
    if(this.promo === "RAMU50" || this.promo === "KUJI50" || this.promo === "NEHRU50"){
      this.totalprice = this.totalprice / 2;
    } else if(this.promo === "KRN") {
      this.totalprice = 0;
    }
  }

  
}