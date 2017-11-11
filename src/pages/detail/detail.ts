import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Food } from '../../interface/food.interface';
import Food1 from '../../data/food1';
import Food2 from '../../data/food2';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage implements OnInit{

  foodData:Food;
  name:string;
  img:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.foodData = this.navParams.data;
  }

  getDetail(type:number) {
    var data;
    
    if(type == 1) {
      data = Food1;
    } else {
      data = Food2;
    }
    //get lenght of array
    var num = data.length;
    //random number in length
    var random = Math.floor(Math.random() * num +1 ) - 1;
    //set random array to valiable
    this.name = data[random].name;
    this.img = data[random].img;

  }

  goHome() {
    this.navCtrl.popToRoot();
  }

}
