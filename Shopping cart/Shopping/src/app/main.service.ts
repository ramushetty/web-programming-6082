import { Injectable } from '@angular/core';
import { data } from './catalog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';

@Injectable({
  providedIn: 'root'
})

export class MainService {

  constructor(private http: HttpClient) { }
  x;
  cart = [];
  update;
  obs;
  maindataDB;
  dataDB() {
    return this.http.get('http://127.0.0.1:3000/home');
  }

  dataObs() {
    return this.obs;
  }

  getData() {
    //  this.http.get('http://10.2.138.101:3000/home');
    //  return data;
    return data;
    // console.log(this.x);
  }
  
  storeDB(data) {
    this.maindataDB = data;
    console.log(data);
  }

  adduser(user) {
    console.log(user);
    return this.http.post('http://127.0.0.1:3000/register', user);
  }

  getStatus() {
    return this.update;
  }

  getUser() {
  }

  validateUser(user) {
    console.log("postinggg LOgin");

    console.log(user.username+"   post");
    const headers = new HttpHeaders().set('Authorization', 'my-auth-token').set('Content-Type','application/json');
    return this.http.post('http://127.0.0.1:3000/login', user, {
      headers: headers
    });
  }

  addToCart(obj) {
    // alert(this.cart.length);
    console.log(obj + " HH")
    for(var i = 0; i < this.cart.length; i++) {
      if (this.cart[i].ind === obj.ind) {
        this.cart[i].quantity = this.cart[i].quantity + obj.quantity;
        // alert(this.cart[i].quantity);
        return;
      }
    }
    this.cart.push(obj);
    console.log(this.cart);
  }

  getCartItems() {
    return this.cart;
  }

  finalCart;

  cnfrmCart(Cart) {
    this.finalCart = Cart;
  }

  cnfrmedCart() {
    return this.finalCart;
  }

  outCart;
  checkOutCart(cart) { 
    this.outCart = cart;
  }

  outcart() {
    return this.outCart;
  }
  resp = [];
  cfrm() {
    for(var i = 0; i < this.outCart.length; i++) {
      console.log(this.outCart.length);
      console.log(this.outCart + "   This Out Cart");
      const headers = new HttpHeaders().set('Authorization', 'my-auth-token').set('Content-Type','application/json');
      this.http.put('http://127.0.0.1:3000/checkout', JSON.stringify(this.outCart[i]), {headers:headers}).subscribe(x => {this.resp[i] = x;
      console.log(this.resp);
    });
    }
  }
  getStat() {
    console.log(this.resp);
    return this.resp;
  }

  revStatus;
  pushReview(obj) {
    console.log('Putting Review')
    return this.http.put('http://127.0.0.1:3000/review', obj).subscribe(x => this.revStatus = x);
  }


  getReview(i) {
    return this.http.get('http://127.0.0.1:3000/reviews/'+i);
  }
}