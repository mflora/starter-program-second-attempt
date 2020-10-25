import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextContainerComponent } from './components/containers/input-text-container/input-text-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputEmailContainerComponent } from './components/containers/input-email-container/input-email-container.component';
import { InputNumberContainerComponent } from './components/containers/input-number-container/input-number-container.component';
import { InputPasswordContainerComponent } from './components/containers/input-password-container/input-password-container.component';
import { ButtonContainerComponent } from './components/containers/button-container/button-container.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProfileComponent } from './components/routed-smarts/profile/profile.component';
import { LoginComponent } from './components/routed-smarts/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterReplyModalComponent } from './components/smarts/register-reply-modal/register-reply-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {httpInterceptorProviders} from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    InputTextContainerComponent,
    InputEmailContainerComponent,
    InputNumberContainerComponent,
    InputPasswordContainerComponent,
    ButtonContainerComponent,
    ProfileComponent,
    LoginComponent,
    RegisterReplyModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
