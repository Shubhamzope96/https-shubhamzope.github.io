import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
    let fruits: string[] = ['facebook', 'instagram', 'linkedIn'];
   }
  
  
  ngOnInit(): void {
    
  }
  
  facebook = faFacebook
  instagram = faInstagram
  linkedIn = faLinkedin
}
