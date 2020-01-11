import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GoogleSigninComponent} from './modules/google-signin/google-signin.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {AuthService, AuthServiceConfig, GoogleLoginProvider, SocialLoginModule} from "angularx-social-login";
import {HttpClientModule} from "@angular/common/http";
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NewAnalysationComponent} from './modules/pages/new-analysation/new-analysation.component';
import {ArchiveComponent} from './modules/pages/archive/archive.component';
import {ProfileComponent} from './modules/pages/profile/profile.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DragDropDirectiveDirective } from './shared/directives/drag-drop-directive.directive';
import { UploadFileComponent } from './modules/pages/new-analysation/upload-file/upload-file.component';
import { CanvasImageComponent } from './shared/components/canvas-image/canvas-image.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1078752352470-64hqv26nc3bg5eehos2vqlfjvsvs2sht.apps.googleusercontent.com")
  },
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    GoogleSigninComponent,
    DashboardComponent,
    NewAnalysationComponent,
    ArchiveComponent,
    ProfileComponent,
    HeaderComponent,
    DragDropDirectiveDirective,
    UploadFileComponent,
    CanvasImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  providers: [
    AuthService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
