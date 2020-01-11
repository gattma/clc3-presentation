import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GoogleSigninComponent} from "./modules/google-signin/google-signin.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {Configuration} from "./configuration/configuration";
import {NewAnalysationComponent} from "./modules/pages/new-analysation/new-analysation.component";
import {ArchiveComponent} from "./modules/pages/archive/archive.component";
import {ProfileComponent} from "./modules/pages/profile/profile.component";


export const routes: Routes = [

  {
    path: Configuration.pages.LOGIN,
    component: GoogleSigninComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: Configuration.pages.DASHBOARD,
    component: DashboardComponent,
    data: {
      title: 'Dashboard Page'
    }
  },
  {
    path: Configuration.pages.NEW_ANALYSATION,
    component: NewAnalysationComponent,
    data: {
      title: 'New Analysation Page'
    }
  },
  {
    path: Configuration.pages.ARCHIVE,
    component: ArchiveComponent,
    data: {
      title: 'Archive Page'
    }
  },
  {
    path: Configuration.pages.PROFILE,
    component: ProfileComponent,
    data: {
      title: 'Profile Page'
    }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
