import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }

  showMoreDetails(item:any) {
    this.showMoreProjectDet(item);
  }

  showMoreProjectDet(item: any){
    debugger;
    if (item==0){
      $(".project1,.project2").hide();
      $(".spinner_overlay").hide();
    }else if(item==1){
      $(".project1").toggle();
      $(".spinner_overlay").toggle();
    }else if (item==2){
      $(".project2").toggle();
      $(".spinner_overlay").toggle();
    }
  }
  close=faClose
}
