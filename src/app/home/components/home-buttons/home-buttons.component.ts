import { Component, Input, Output, EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import { ButtonClicked } from '../../model/button-clicked.enum';

@Component({
  selector: 'sw-home-buttons',
  templateUrl: './home-buttons.component.html',
  styleUrls: ['./home-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeButtonsComponent {

  @Input() totalCount!: number;
  @Input() nextPageExist!: boolean;
  @Input() prevPageExist!: boolean;

  @Output() changePage: EventEmitter <ButtonClicked> = new EventEmitter();

  prevPetsPage() {
    this.changePage.emit(ButtonClicked.prev);
  }

  nextPetsPage() {
      this.changePage.emit(ButtonClicked.next);
  }


}
