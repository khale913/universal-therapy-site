import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageIntroComponent } from './reusable-components/page-intro/page-intro.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactLeadComponent } from './reusable-components/contact-lead/contact-lead.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ResourcesComponent,
    ContactUsComponent,
    ServicesComponent,
    NavbarComponent,
    PageIntroComponent,
    FooterComponent,
    ContactLeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
