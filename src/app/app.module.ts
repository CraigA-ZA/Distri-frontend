import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-vkzzvshe.us.auth0.com',
      clientId: '9HMugNe8tgLFD2tTIv2MHJ6kCdJ64Owu'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
