import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fname:string="";
  lname:string="";

  constructor() { }

  onSubmit(){
    let data = {
      "fname" : this.fname,
      "lname" : this.lname
    }
  }

  ngOnInit(): void {
  }

}
