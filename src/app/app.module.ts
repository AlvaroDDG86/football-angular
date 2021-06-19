import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { AppRoutingModule } from './AppRoutingModule';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { AgGridModule } from 'ag-grid-angular';
import { ClasificationComponent } from './views/clasification/clasification.component';
import { AgGridImageComponent } from './components/ag-grid-image/ag-grid-image.component';
import { TeamComponent } from './views/team/team.component';
import { AgGridLastComponent } from './components/ag-grid-last/ag-grid-last.component';
import { matchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerListItemComponent } from './components/player-list-item/player-list-item.component';
import { MatchComponent } from './views/match/match.component';
import { HttpInterceptorInterceptor } from './interceptor/http-interceptor.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    MainComponent,
    ClasificationComponent,
    AgGridImageComponent,
    TeamComponent,
    AgGridLastComponent,
    matchesComponent,
    PlayerComponent,
    PlayerListItemComponent,
    MatchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatTabsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    NgxSpinnerModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    AgGridImageComponent,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
