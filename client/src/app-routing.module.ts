import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { ChoicePetComponent } from './components/choice-pet/choice-pet.component';
import { PlaySectorComponent } from './components/play-sector/play-sector.component';
import { PlayPlaceMedicareComponent } from './components/play-place-medicare/play-place-medicare.component';
import { PlayPlaceAreneComponent } from './components/play-place-arene/play-place-arene.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'choice-pet', component: ChoicePetComponent, canActivate: [AuthGuard] },
  { path: 'play-sector', component: PlaySectorComponent, canActivate: [AuthGuard] },
  { path: 'play-place-medicare/:id', component: PlayPlaceMedicareComponent, canActivate: [AuthGuard] },
  { path: 'play-place-arene/:id', component: PlayPlaceAreneComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
