import { Component, HostListener, OnInit,Pipe, PipeTransform, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DomSanitizer,SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl} from '@angular/platform-browser';

import {MatIconRegistry} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HomeService } from './../services/home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import AOS from 'aos';

declare var $ : any; 

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    // return this.sanitized.bypassSecurityTrustHtml(value);
    switch (type) {
      case 'html': return this.sanitized.bypassSecurityTrustHtml(value);
      case 'style': return this.sanitized.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitized.bypassSecurityTrustScript(value);
      case 'url': return this.sanitized.bypassSecurityTrustUrl(value);
      case 'resourceUrl': return this.sanitized.bypassSecurityTrustResourceUrl(value);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}

@Component({
  selector: 'app-smartsuite',
  templateUrl: './smartsuite.component.html',
  styleUrls: ['./smartsuite.component.css']
})
export class SmartsuiteComponent implements OnInit {
  public user: any;

  data:any = [];
  public activePillIndex:number = 0;

  dataMenuP:any = [];
  loader = true;

  @HostListener('window:scroll', ['$event']) 
  @HostListener("scroll", ['$event'])
  onElementScroll($event:Event){
    let scrollOffset = $event.currentTarget;
    console.log("scroll: ", scrollOffset);
  }
  
  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { 

  }

  ngOnInit(): void {
    this._homeservice.getHome()
    .subscribe((res:any) => {
      this.loader = false;
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
      AOS.init();
    });
  }

  

   public selectPill(index:number) {
    this.activePillIndex = index;
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
  
}

