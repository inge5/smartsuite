import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

declare var $ : any; 

@Component({
  selector: 'app-submenu-smartsales',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuSmartsalesComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  submenu:any = [];
  public userside: any;

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { }

  ngOnInit(): void {
    this._homeservice.getMenuSmartsales()
    .subscribe((res:any) => {
      this.submenu = this._sanitizer.bypassSecurityTrustHtml(res);
      this.submenu = this.submenu.changingThisBreaksApplicationSecurity;
    });
  }

  
  abrirSide(){
    $("#wrapper").toggleClass("toggled");
    $('.overlaytrabaja').addClass('active');
  }

  public cierraTrabajemos() {
    $('.overlaytrabaja').removeClass('active');
    $("#wrapper").toggleClass("toggled");
  }

  scrollConClick( url:string ){
    $('html, body').animate({
      scrollTop: $(url).offset().top
    }, .5);
}

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }


}
