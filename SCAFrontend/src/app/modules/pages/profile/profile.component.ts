import { Component, OnInit } from '@angular/core';
import {Configuration} from "../../../configuration/configuration";
import {SocialUser} from "../../../shared/models/SocialUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  socialUser: SocialUser;
  displayedColumns: string[] = ['firstName', 'lastName', 'authorizationCode', 'authToken', 'email', 'facebook',
    'id', 'idToken', 'image', 'linkedIn', 'name', 'photoUrl', 'provider', 'token'];

  constructor(private router: Router) { }

  ngOnInit() {
    this.socialUser = JSON.parse(localStorage.getItem(Configuration.user.STORAGE));
    if (!this.socialUser) {
      this.routeTo(Configuration.pages.LOGIN)
    }
  }

  routeTo(page: string){
    this.router.navigate([page]);
  }

}
