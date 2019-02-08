import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilterPipe } from '../filter.pipe';
// import {  } from ''';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  data;
  constructor(private activeroute: ActivatedRoute,
    private loc: Location, private service:MainService) { 
    this.data = this.service.getData();
  }

  ser;
  ngOnInit() {
    this.ser = this.activeroute.snapshot.paramMap.get('search');
    this.toArr();
  }
  names = [];
  toArr() {
    for(var i = 0; i < this.data.length; i++) {
      this.names.push(this.data[i].title);
    }
  }

  


}
