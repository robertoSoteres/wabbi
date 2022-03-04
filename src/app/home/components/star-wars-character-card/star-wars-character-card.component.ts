import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SWCharacter } from '../../../shared/model/sw-character.model';

@Component({
  selector: 'sw-character-card',
  templateUrl: './star-wars-character-card.component.html',
  styleUrls: ['./star-wars-character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarWarsCharacterCardComponent {

  @Input() characterInfo!: SWCharacter;
  @Input() currentUrl!: string;

  constructor(private readonly router: Router) {}

  goToDetails() {
    this.router.navigate([`details/${this.characterInfo.name}`], {
      queryParams: { characterUrl: this.characterInfo.url },
      state: {
        currentUrl: this.currentUrl
      }
    }
    );
    
  }
}
