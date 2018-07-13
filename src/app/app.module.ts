import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { RouterModule } from '@angular/router' ;
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LandingPageComponent,
    FooterComponent,
    LoginSignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'', component:LandingPageComponent},
      {path:'login' , component:LoginSignupComponent},
      { path:'lp', component:LandingPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
