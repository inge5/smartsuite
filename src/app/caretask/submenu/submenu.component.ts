import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/home.service';

declare var $ : any; 

@Component({
  selector: 'app-submenu-caretask',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuCareTaskComponent implements OnInit {
  public userside: any;
  submenu:any = [];

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { }

  ngOnInit(): void {
    this._homeservice.getMenuCareTask()
    .subscribe((res:any) => {
      this.submenu = this._sanitizer.bypassSecurityTrustHtml(res);
      this.submenu = this.submenu.changingThisBreaksApplicationSecurity;
    });
  }

  abrirSide(){
    $("#wrapper").toggleClass("toggled");
    $('.overlaytrabaja').addClass('active');
  }

}
