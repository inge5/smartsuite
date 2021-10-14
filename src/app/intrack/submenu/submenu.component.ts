import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/home.service';

declare var $ : any; 

@Component({
  selector: 'app-submenu-intrack',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuInTrackComponent implements OnInit {
  submenu:any = [];

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { }

  ngOnInit(): void {
    this._homeservice.getMenuInTrack()
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

  scrollConClick( url:string ){
    console.log(url);
    $('html, body').animate({
      scrollTop: $(url).offset().top
    }, .5);
}

}
