import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  ind = [];
  cart = [];
  constructor(private service: MainService) {
    this.ind = this.service.getCartItems();
    console.log("hai")
    console.log(this.ind);
    this.cart = this.service.getData();
    // this.totalcost();
   }

  ngOnInit() {
    // this.totalcost();
  }

  totalprice;
  totalcost() {
    for(var i = 0; i < this.ind.length; i++) {
      this.totalprice += this.cart[this.ind[i]].price * this.ind[i].quantity;
    }
  }

  update() {

    alert("Hola");
  }

  confrmCart() {
    this.service.cnfrmCart(this.ind);
  }


}
