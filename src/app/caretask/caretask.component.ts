import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {MatSidenav} from '@angular/material/sidenav';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { HomeService } from '../services/home.service';
import AOS from 'aos';
import { CommonService } from '../services/common.service';

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
  selector: 'app-caretask',
  templateUrl: './caretask.component.html',
  styleUrls: ['./caretask.component.css']
})
export class CaretaskComponent implements OnInit {
  data:any = [];
  loader = true;
  submenu:any = [];

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService, private common: CommonService) { 

  }

  ngOnInit(): void {
    this.common.paginaCareTaskMetaData();
    this._homeservice.getHomeCareTask()
    .subscribe((res:any) => {
      this.loader = false;
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
      AOS.init();
    });
  }
  abrirSide(){
    $("#wrapper").toggleClass("toggled");
    $('.overlaytrabaja').addClass('active');
  }
}
