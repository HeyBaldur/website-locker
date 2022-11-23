import { Component, OnInit } from '@angular/core';
import { GITHUB_LOGO_DARK } from 'src/app/modules/auth/utils/const';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public github_logo = GITHUB_LOGO_DARK;
  constructor() { }

  ngOnInit() {
  }

}
