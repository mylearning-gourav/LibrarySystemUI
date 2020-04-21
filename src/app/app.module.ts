import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './index/signup/signup.component';
import { IndexComponent } from './index/index.component';
import { IndexFeedbackListComponent } from './index/index-feedback-list/index-feedback-list.component';
import { IndexNewArrivalListComponent } from './index/index-new-arrival-list/index-new-arrival-list.component';
import { IndexTopRatedListComponent } from './index/index-top-rated-list/index-top-rated-list.component';
import { IndexMostViewedListComponent } from './index/index-most-viewed-list/index-most-viewed-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    IndexComponent,
    IndexFeedbackListComponent,
    IndexNewArrivalListComponent,
    IndexTopRatedListComponent,
    IndexMostViewedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
