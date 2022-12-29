import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialsComponent implements OnInit {
  revShown: any = 1;

  constructor() {
    if (window.innerWidth > 1000) {
      this.revShown = 2;
      console.log(window.innerWidth, window.outerWidth)
    }
  }

  ngOnInit(): void {
    console.log(window.innerWidth);
  }

  onResize(e: any) {
    if (window.innerWidth > 1000) {
      this.revShown = 2;
      // console.log(window.innerWidth, window.outerWidth)
    } else {
      this.revShown = 1;
    }
  }

}
