import { UserService } from './user.service';
// Angular Module and Router Dependencies are imported here
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

// Angular Form Dependencies are imported here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormArrayName } from '@angular/forms';

// Material Design Dependencies are imported here
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatToolbarModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material';
import { MatFormField } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

// Component are imported here
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './home/login/component/login-user.component';
import { SearchFlightComponent } from './home/search/component/search-flight.component';


// Service are imported here
import { SearchFlightService } from './home/search/service/search-flight.service';
import { LoginUserService } from './home/login/service/login-user.service';
import { UsertableComponent } from './usertable/usertable.component';

// mATERIAL IMPORT
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



// import { FormsModule } from '@angular/forms';
// import {
//   MatButtonToggleModule,
//   MatChipsModule,
//   MatDatepickerModule,
//   MatDialogModule,
//   MatExpansionModule,
//   MatGridListModule,
//   MatListModule,
//   MatNativeDateModule,
//   MatPaginatorModule,
//   MatProgressBarModule,
//   MatProgressSpinnerModule,
//   MatRadioModule,
//   MatRippleModule,
//   MatSelectModule,
//   MatSidenavModule,
//   MatSliderModule,
//   MatSlideToggleModule,
//   MatSnackBarModule,
//   MatSortModule,
//   MatTabsModule,
//   MatTooltipModule,
//   MatStepperModule,
// } from '@angular/material';
// import { CdkTableModule } from '@angular/cdk/table';




// @NgModule({
//   exports: [
//     CdkTableModule,
//     MatAutocompleteModule,
//     MatButtonModule,
//     MatButtonToggleModule,
//     MatCardModule,
//     MatCheckboxModule,
//     MatChipsModule,
//     MatStepperModule,
//     MatDatepickerModule,
//     MatDialogModule,
//     MatExpansionModule,
//     MatGridListModule,
//     MatIconModule,
//     MatInputModule,
//     MatListModule,
//     MatMenuModule,
//     MatNativeDateModule,
//     MatPaginatorModule,
//     MatProgressBarModule,
//     MatProgressSpinnerModule,
//     MatRadioModule,
//     MatRippleModule,
//     MatSelectModule,
//     MatSidenavModule,
//     MatSliderModule,
//     MatSlideToggleModule,
//     MatSnackBarModule,
//     MatSortModule,
//     MatTableModule,
//     MatTabsModule,
//     MatToolbarModule,
//     MatTooltipModule,
//   ]
// })

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginUserComponent,
    SearchFlightComponent,
    UsertableComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatCheckboxModule, MatCardModule, MatButtonModule, MatIconModule,
    MatMenuModule, MatToolbarModule, MatInputModule, ReactiveFormsModule, HttpModule, HttpClientModule,
    MatTableModule, HttpModule, ReactiveFormsModule,
  ],
  providers: [MatIconModule, LoginUserService, SearchFlightService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
