import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/components/header/header.component';
import { CurrencyModule } from './currency/currency.module';
import { EditableTableModule } from './editable-table/editable-table.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { UserComponent } from './core/components/user/user.component';
import { GithubSearchModule } from './github-search/github-search.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CurrencyModule,
    EditableTableModule,
    AuthModule,
    SharedModule,
    GithubSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
