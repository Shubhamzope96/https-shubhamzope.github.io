import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faContactCard } from '@fortawesome/free-solid-svg-icons';
import { faHandsPraying} from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {

  }
  showAlert(){
    //this.("hbhsdgjfgj");
    
  }
  showNavOptions(){
    
    document.getElementById('navigationList')?.classList.add("show");
    document.getElementById('navigationList')?.classList.remove("hide");
    
    document.getElementById('nav-icon')?.classList.add("hide");
    document.getElementById('nav-icon')?.classList.add("show");

  }
 
  home = faHome
  person = faPerson
  projects = faLaptopCode
  contacts = faContactCard
  handsFolded = faHandsPraying
  navIcon = faList
}
