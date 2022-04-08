import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'currency', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: 'currency', loadChildren: () => import('./currency/currency.module').then((m) => m.CurrencyModule) },
  { path: 'editable-table', loadChildren: () => import('./editable-table/editable-table.module').then((m) => m.EditableTableModule) },
  { path: 'github-search', loadChildren: () => import('./github-search/github-search.module').then((m) => m.GithubSearchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
