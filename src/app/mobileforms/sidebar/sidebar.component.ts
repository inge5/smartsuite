import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/home.service';

declare var $ : any; 

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    // return this.sanitized.bypassSecurityTrustHtml(value);
    switch (type) {
      case 'html': return this.sanitized.bypassSecurityTrustHtml(value);
      case 'style': return this.sanitized.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitized.bypassSecurityTrustScript(value);
      case 'url': return this.sanitized.bypassSecurityTrustUrl(value);
      case 'resourceUrl': return this.sanitized.bypassSecurityTrustResourceUrl(value);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}

@Component({
  selector: 'app-sidebar-mobileforms',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarMobileFormsComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  public userside: any;
  data:any = [];
  loader = true;
  submenu:any = [];

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
