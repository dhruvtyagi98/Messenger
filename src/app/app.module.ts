import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './services/user/user.service';
import { HomeComponent } from './chat/home/home.component';
import { ChatComponent } from './chat/chat/chat.component';
import { ContactsComponent } from './chat/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PageNotFoundComponent,
    HomeComponent,
    ChatComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
