import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/home.service';

//import { min } from '../../../../../athletic/Athletic_Backend/public/assets/lte/bower_components/moment/moment';

declare var $ : any; 

@Component({
  selector: 'app-sidebar-ontime',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarOntimeComponent implements OnInit {
  public userside: any;
  data:any = [];

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { 

  }
  ngOnInit(): void {

    var obj = {
      name: 'Jhon',
      lastname: 'Bliss',
      city: 'Florida'
    }
    Object.keys(obj);
    for (var i in obj) {
      // console.log(obj[i]);
      // console.log(i);
      
    }
    // console.log(obj);
    this._homeservice.getHomeOnTime()
    .subscribe((res:any) => {
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
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
}
