import { Component, OnInit } from '@angular/core';
import {SocialUser} from "../../models/SocialUser";
import {Configuration} from "../../../configuration/configuration";
import {Router} from "@angular/router";
import {AuthService} from "angularx-social-login";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  configuration = Configuration;
  socialUser = new SocialUser();

  constructor(
    private router: Router,
    public OAuth: AuthService,
  ) { }

  ngOnInit() {
    this.socialUser = JSON.parse(localStorage.getItem(Configuration.user.STORAGE));
    if (!this.socialUser) {
      this.routeTo(Configuration.pages.LOGIN)
    }
  }

  logout() {
    this.OAuth.signOut().then(data => {
      localStorage.removeItem(Configuration.user.STORAGE);
      this.router.navigate([Configuration.pages.LOGIN]);
    });
  }

  routeTo(page: string){
    this.router.navigate([page]);
  }

}
