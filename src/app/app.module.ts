import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptorService } from './jwt-interceptor.service';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProtectedComponentComponent } from './protected-component/protected-component.component';
import { UnprotectedComponentComponent } from './unprotected-component/unprotected-component.component';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { CustomDatePickerComponent } from './custom-date-picker/custom-date-picker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CustomTableGridComponent } from './custom-table-grid/custom-table-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponentComponent,
    UnprotectedComponentComponent,
    HeaderComponent,
    CustomDatePickerComponent,
    CustomTableGridComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    LoadingBarHttpClientModule,
    LoadingBarModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    MatDatepickerModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
