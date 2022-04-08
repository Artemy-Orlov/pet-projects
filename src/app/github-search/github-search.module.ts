import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GithubSearchPageComponent } from './pages/github-search-page/github-search-page.component';
import { SharedModule } from '../shared/shared.module';
import { GithubSearchService } from './services/github-search.service';
import { PaginatorComponent } from './components/paginator/paginator.component';



@NgModule({
  declarations: [
    GithubSearchPageComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: GithubSearchPageComponent }]),
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [GithubSearchService]
})
export class GithubSearchModule { }
