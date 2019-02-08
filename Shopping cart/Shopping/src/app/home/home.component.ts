import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { getNgModuleDef } from '@angular/core/src/render3/definition';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any;
  constructor(private service:MainService) { 
    // while(this.service.dataObs().subscribe(x) == null){
    //   console.log("Hello")
    // }
    
    // this.service.dataDB().subscribe(x => {
    //   console.log("888888"+x===undefined);
    //   this.products = x;
    //   console.log(this.products);
    //   this.service.storeDB(this.products)});
    this.products = this.service.getData();
    // console.log(this.products + "    --- From DB");
  }

  ngOnInit() {
  }

  itemadded = false;
  carthide = true;
  // fun1()
  // {
  //   console.log(54);
  // }
  addtocart(i) {
    var obj = {ind:i, quantity:1};
    this.service.addToCart(obj);
  }
}
