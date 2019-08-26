import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  level: number = -1;
  initLevel: number = -1;
  destinationLevel: number;

  timePast: string = "00:00";
  tempsEcouler: any;

  ismoving: boolean = false;
  isUp: boolean = false;
  isDown: boolean = false;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
      this.level = Math.floor(Math.random() * (3 - (-1)) + -1);
      this.initLevel = this.level;
      console.log(this.level);
  }

  goTo(level: number) {
    if (level !== this.initLevel && !this.ismoving) {
      this.destinationLevel = level;
      this.level = -2;

      // console.log('click button ' + level);

      if (this.initLevel < this.destinationLevel) {
        console.log('Monte');

        this.ismoving = true;
        this.isUp = true;
        this.incrementTime();
        let timer = setInterval(() => {
      
          this.initLevel++;
          if (this.initLevel === this.destinationLevel) {
            this.destinationLevel = -2;
            this.level = this.initLevel;
            clearInterval(timer);
            clearInterval(this.tempsEcouler);
            this.ismoving = false;
            this.isUp = false;
          }
        }, 2000);
      } else {
        console.log('Descend');
        this.ismoving = true;
        this.isDown = true;

        this.incrementTime();
        let timer = setInterval(() => {
          this.initLevel--;
          if (this.initLevel === this.destinationLevel) {
            this.destinationLevel = -2;
            this.level = this.initLevel;
            clearInterval(timer);
            clearInterval(this.tempsEcouler);
            this.ismoving = false;
            this.isDown = false;
          }
        }, 2000);
      }
    }
    
  }

  incrementTime() {
     // Afiche le temps 
     let i = 0;
     this.tempsEcouler = setInterval(() => {
       if (i>9) {
         this.timePast = "00:" + (i++);
       } else {
         this.timePast = "00:0" + (i++);
       }
     }, 300);
  }

}
