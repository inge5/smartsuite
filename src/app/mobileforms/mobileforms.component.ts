import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {MatSidenav} from '@angular/material/sidenav';

declare var $ : any; 

@Component({
  selector: 'app-mobileforms',
  templateUrl: './mobileforms.component.html',
  styleUrls: ['./mobileforms.component.css']
})
export class MobileformsComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  public userside: any;

  constructor(private http: HttpClient) { 
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
  }

  reason = '';

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
