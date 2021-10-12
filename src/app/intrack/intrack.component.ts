import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from '../services/home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import AOS from 'aos';
import { CommonService } from '../services/common.service';

declare var $ : any; 

@Component({
  selector: 'app-intrack',
  templateUrl: './intrack.component.html',
  styleUrls: ['./intrack.component.css']
})
export class IntrackComponent implements OnInit {
  public userside: any;
  data:any = [];
  loader = true;
  
  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService, private common: CommonService) { 

  }

  ngOnInit(): void {
    this.common.paginaInTrackMetaData();
    this._homeservice.getHomeInTrack()
    .subscribe((res:any) => {
      this.loader = false;
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
      AOS.init();
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: false
  }

  abrirSide(){
    $("#wrapper").toggleClass("toggled");
    $('.overlaytrabaja').addClass('active');
  }


}
