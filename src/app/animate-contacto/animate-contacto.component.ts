import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from '../services/home.service';

declare var $ : any; 

@Component({
  selector: 'app-animate-contacto',
  templateUrl: './animate-contacto.component.html',
  styleUrls: ['./animate-contacto.component.css']
})
export class AnimateContactoComponent implements OnInit {
  public user: any;
  data:any = [];
  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { 
    this.user = {
      nombres: '',
      apellidos: '',
      telefono: '',
      ciudad: '',
      email: '',
      mensaje: '',
      acepto: ''
    };
  }

  ngOnInit(): void {
    this._homeservice.getHome()
    .subscribe((res:any) => {
      // this.loader = false;
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
    });
  }

  enviarForm(form) {
    $.ajax({
      url: '',
      type: 'POST',
      data: JSON.stringify(this.user),
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
