import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/home.service';
declare var $ : any; 

@Component({
  selector: 'app-submenu-ontime',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuOntimeComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  public userside: any;
  submenu:any = [];

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { }

  ngOnInit(): void {
    this._homeservice.getMenuOnTime()
    .subscribe((res:any) => {
      this.submenu = this._sanitizer.bypassSecurityTrustHtml(res);
      this.submenu = this.submenu.changingThisBreaksApplicationSecurity;
    });
  }

  reason = '';

  abrirSide(){
    $("#wrapper").toggleClass("toggled");
    $('.overlaytrabaja').addClass('active');
  }

  public cierraTrabajemos() {
    $('.overlaytrabaja').removeClass('active');
    $("#wrapper").toggleClass("toggled");
  }

  scrollConClick( url:string ){
    console.log(url);
    $('html, body').animate({
      scrollTop: $(url).offset().top
    }, .5);
}


  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
