import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { ChoicePetComponent } from './components/choice-pet/choice-pet.component';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { PlaySectorComponent } from './components/play-sector/play-sector.component';
import { PlayPlaceMedicareComponent } from './components/play-place-medicare/play-place-medicare.component';
import { PlayPlaceMedicareActionComponent } from './components/play-place-medicare-action/play-place-medicare-action.component';
import { PlayPlaceAreneComponent } from './components/play-place-arene/play-place-arene.component';
import { PlayPlaceAreneActionComponent } from './components/play-place-arene-action/play-place-arene-action.component';


import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { PetService } from './services/pet/pet.service';
import { SectorService } from './services/sector/sector.service';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';

import { AuthGuard } from './guard/auth.guard';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      LogoutComponent,
      RegisterComponent,
      ChoicePetComponent,
      PlaySectorComponent,
      NavbarMenuComponent,
      PlayPlaceMedicareComponent,
      PlayPlaceMedicareActionComponent,
      PlayPlaceAreneComponent,
      PlayPlaceAreneActionComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatGridListModule,
   ],
   providers: [
    AuthGuard, AuthService, UserService, PetService, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }, SectorService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
