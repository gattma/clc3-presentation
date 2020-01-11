import {Component, OnInit} from '@angular/core';
import {AuthService, GoogleLoginProvider} from "angularx-social-login";
import {SocialLoginService} from "../../shared/services/SocialLoginService";
import {Router} from "@angular/router";
import {SocialUser} from "../../shared/models/SocialUser";
import {Configuration} from "../../configuration/configuration";

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.css']
})
export class GoogleSigninComponent implements OnInit {

  response: any;
  socialUser: SocialUser  = new SocialUser();

  constructor(
    private OAuth: AuthService,
    private socialLoginService: SocialLoginService,
    private router: Router
  ) {
  }

  ngOnInit() {

  }

  public socalSignIn(){
    this.OAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then((socialUser: any) => {
      this.socialUser = socialUser;
      this.saveUser();
    })
  }

  public saveUser(){
    localStorage.setItem(Configuration.user.STORAGE, JSON.stringify(this.socialUser));
    this.router.navigate([Configuration.pages.DASHBOARD]);
    // this.socialLoginService.saveUser(socialUser).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //   }
    // )
  }


}
