import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { FormsModule } from '@angular/forms';
import { OmegaComponent } from './omega/omega.component';
import { NestedComponentComponent } from './nested-component/nested-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    OmegaComponent,
    NestedComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'a', pathMatch: 'full'},
      { path: 'a', component: AlphaComponent },
      { path: 'b', component: BetaComponent },
      { path: 'c', component: OmegaComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
