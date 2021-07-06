import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {MatSidenav} from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/home.service';

declare var $ : any; 

@Component({
  selector: 'app-precios-mobileforms',
  templateUrl: './precios-mobileforms.component.html',
  styleUrls: ['./precios-mobileforms.component.css']
})
export class PreciosMobileformsComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  prices:any = [];
  data:any = [];
  public userside: any;
  loader = true;

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { 
    this.userside = {
      empresa: '',
      nombres: '',
      telefono: '',
      email: '',
      producto: '',
      acepto: ''
    };
  }

  ngOnInit(): void {
    this._homeservice.getHomeMobileForms()
    .subscribe((res:any) => {
      this.loader = false;
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
      console.log(this.data);
    });
    this._homeservice.getPriceMobileforms()
    .subscribe((res:any) => {
      this.prices = this._sanitizer.bypassSecurityTrustHtml(res);
      this.prices = this.prices.changingThisBreaksApplicationSecurity;
      this.loader = false;
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


  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  enviarForm(form) {
    $.ajax({
      url: '',
      type: 'POST',
      data: JSON.stringify(this.userside),
      dataType:"json",
      success: function(data) {
       
      }, error: function(error){
        if(error.status === 200){
          /*Swal.fire({
            icon: 'success',
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          });*/ 
          //console.log(error);
        form.reset();
        } else {
          /*Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')*/
        }
      }
    });
   }
}
