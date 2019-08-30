import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProfileService} from './services/profile.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StrikethroughDirective } from './strikethrough.directive';
// import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    NavbarComponent,
    StrikethroughDirective,
    // DateCountPipe
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    

    AppRoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
