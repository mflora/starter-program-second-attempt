import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainersDemoComponent } from './components/containers-demo/containers-demo.component';
import { LoginComponent } from './components/routed-smarts/login/login.component';
import { ProfileComponent } from './components/routed-smarts/profile/profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'profile/:username', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
