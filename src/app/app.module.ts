import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { MatchsComponent } from './components/matchs/matchs.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerListItemComponent } from './components/player-list-item/player-list-item.component';

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
    MatchsComponent,
    PlayerComponent,
    PlayerListItemComponent
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
    RouterModule,
    AgGridModule.withComponents([])
  ],
  providers: [AgGridImageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
