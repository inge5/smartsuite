import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//declare var $ : any; 

@Component({
  selector: 'app-smartsuite',
  templateUrl: './smartsuite.component.html',
  styleUrls: ['./smartsuite.component.css']
})
export class SmartsuiteComponent implements OnInit {
  //public user: any;
  constructor(private http: HttpClient) { 
    /*this.user = {
      nombres: '',
      apellidos: '',
      telefono: '',
      ciudad: '',
      email: '',
      mensaje: '',
      acepto: ''
    };*/
  }

  ngOnInit(): void {
  }
  
  // enviarForm(form) {
  //   $.ajax({
  //     url: '',
  //     type: 'POST',
  //     data: JSON.stringify(this.user),
  //     dataType:"json",
  //     success: function(data) {
       
  //     }, error: function(error){
  //       if(error.status === 200){
          /*Swal.fire({
            icon: 'success',
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          });*/ 
          //console.log(error);
        // form.reset();
        // } else {
          /*Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')*/
  //       }
  //     }
  //   });
  //  }
}
