import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/home.service';

declare var $ : any; 

@Component({
  selector: 'app-sidebar-intrack',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarInTrackComponent implements OnInit {
  public userside: any;
  data:any = [];

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { 

  }

  ngOnInit(): void {
    this._homeservice.getMenuInTrack()
    .subscribe((res:any) => {
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
    });
    this._homeservice.getHomeInTrack()
    .subscribe((res:any) => {
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
    });
  }
  reason = '';

  public cierraTrabajemos() {
    $('.overlaytrabaja').removeClass('active');
    $("#wrapper").toggleClass("toggled");
  }
}
