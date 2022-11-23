import { Component, OnInit } from '@angular/core';
import { GITHUB_LOGO_LIGHT, OCTOCAT } from '../utils/const';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../css/auth.css']
})
export class SignInComponent implements OnInit {

  public logo = OCTOCAT;
  public github_logo = GITHUB_LOGO_LIGHT;
  constructor() { }

  ngOnInit() {
  }

}
