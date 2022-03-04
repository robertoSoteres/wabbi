import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HomeService } from './services/home.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SWCharacter } from '../shared/model/sw-character.model';
import { ButtonClicked } from './model/button-clicked.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  characters: SWCharacter[] = [];
  nextPage!: string;
  prevPage!: string;
  currentPage!: string;

  private unsubscribe$ = new Subject<void>();

  constructor(private readonly homeService: HomeService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getStarWarsData(history.state.currentUrl ? history.state.currentUrl : undefined);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getStarWarsData(url?: string) {
    this.currentPage = url ? url : "";
    this.homeService.getStarWarsPeople(url)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(starWarsPeople => {
        this.characters = starWarsPeople.results;
        this.prevPage = starWarsPeople.previous;
        this.nextPage = starWarsPeople.next;
        this.changeDetectorRef.detectChanges();
      });
  }

  updateData(buttonClicked: ButtonClicked) {
    this.clearData();
    switch (buttonClicked) {
      case ButtonClicked.next:
        this.getStarWarsData(this.nextPage);
        break;
        case ButtonClicked.prev:
          this.getStarWarsData(this.prevPage);
          break;
      default:
        break;
    }
  }

  clearData() {
    this.characters = [];
    this.changeDetectorRef.detectChanges();
  }

}
