import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {MatSidenav} from '@angular/material/sidenav';
import { HomeService } from 'src/app/services/home.service';
import { DomSanitizer } from '@angular/platform-browser';

declare var $ : any; 

@Component({
  selector: 'app-precios-smartsales',
  templateUrl: './precios-smartsales.component.html',
  styleUrls: ['./precios-smartsales.component.css']
})
export class PreciosSmartsalesComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  public userside: any;
  prices:any = [];
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
    
    this._homeservice.getPriceSmartsales()
    .subscribe((res:any) => {
      this.prices = this._sanitizer.bypassSecurityTrustHtml(res);
      this.prices = this.prices.changingThisBreaksApplicationSecurity;
      this.loader = false;
    });
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
