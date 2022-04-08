import { Component, OnDestroy, OnInit } from '@angular/core';
import { GithubSearchService } from '../../services/github-search.service';
import { Subject } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { RepoModel } from '../../models/repo.model';

@Component({
  selector: 'app-github-search-page',
  templateUrl: './github-search-page.component.html',
  styleUrls: ['./github-search-page.component.scss']
})
export class GithubSearchPageComponent implements OnInit, OnDestroy {

  inputValueControl = new FormControl('', [Validators.minLength(4)]);
  repos: RepoModel[] = [];
  isLoading = false;

  currentPage = 1;

  private unsubscribe$ = new Subject();

  constructor(private githubSearchService: GithubSearchService) { }

  ngOnInit(): void {
    this.inputValueControl.valueChanges
      .pipe(
        debounceTime(500),
        takeUntil(this.unsubscribe$),
        filter(() => this.inputValueControl.valid),
      )
      .subscribe(
        () => {
          this.getReposPaginate();
        });
  }

  getReposPaginate(): void {
    this.isLoading = true;
    this.githubSearchService.getRepos(this.inputValueControl.value, this.currentPage).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(
      data => {
        this.repos = data.items;
        this.isLoading = false;
      }
    );
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.getReposPaginate();
  }

  goToLink(link: string): void {
    window.open(link, '_blank');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
