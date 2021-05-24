import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {MatSidenav} from '@angular/material/sidenav';

declare var $ : any; 

@Component({
  selector: 'app-header-smartsales',
  templateUrl: './header-smartsales.component.html',
  styleUrls: ['./header-smartsales.component.css']
})
export class HeaderSmartsalesComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor() { }

  ngOnInit(): void {
  }
  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
