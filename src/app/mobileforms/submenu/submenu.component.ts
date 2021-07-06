import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/home.service';

declare var $ : any; 

@Component({
  selector: 'app-submenu-mobileforms',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuMobileformsComponent implements OnInit {
  submenu:any = [];

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { }

  ngOnInit(): void {
    this._homeservice.getMenuMobileForms()
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
}
