import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Food } from '../../interface/food.interface';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goDetail(foodData:Food) {
    this.navCtrl.push(DetailPage, foodData);
  }

  // random(type:number) {

  //     var data;
  //     if (type == 1) {
  //       data = Food1;
  //     } else {
  //       data = Food2;
  //     }

  //     var num = data.length;
  //     var random = Math.floor((Math.random() * num) + 1) - 1 ;  
  //     this.name = data[random].name;
  //     this.img = data[random].img;
      
  // }
  
}
