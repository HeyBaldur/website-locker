import { Component, OnInit } from '@angular/core';
import { GITHUB_LOGO_DARK, GITHUB_LOGO_LIGHT, OCTOCAT } from '../utils/const';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../css/auth.css']
})
export class SignUpComponent implements OnInit {

  public logo = OCTOCAT;
  public github_logo = GITHUB_LOGO_LIGHT;
  constructor() { }

  ngOnInit() {
  }

}
