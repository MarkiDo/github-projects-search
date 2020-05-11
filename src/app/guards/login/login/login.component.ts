import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import {MatDialogRef  } from "@angular/material";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
passwordControl= new FormControl('',[Validators.required])

  constructor(private dialog: MatDialogRef<LoginComponent>) { }

  login(){
    localStorage.setItem('password',this.passwordControl.value);
    this.dialog.close(this.passwordControl.value);
  }

  close(){
    this.dialog.close()
  }
}
