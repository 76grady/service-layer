import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { FormsModule } from '@angular/forms';
import { OmegaComponent } from './omega/omega.component';
import { NestedComponentComponent } from './nested-component/nested-component.component';
import { ChildAlphaComponent } from './child-alpha/child-alpha.component';
import { ChildBetaComponent } from './child-beta/child-beta.component';
import { DialogModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    OmegaComponent,
    NestedComponentComponent,
    ChildAlphaComponent,
    ChildBetaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'a', pathMatch: 'full'},
      { path: 'a', component: AlphaComponent },
      { path: 'b', component: BetaComponent },
      { path: 'c', component: OmegaComponent }]),
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
