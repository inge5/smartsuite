import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/home.service';

declare var $ : any; 

@Component({
  selector: 'app-sidebar-onecheck',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarOneCheckComponent implements OnInit {
  public userside: any;
  data:any = [];

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
    this._homeservice.getHomeOneCheck()
    .subscribe((res:any) => {
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
      console.log(this.data);
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
