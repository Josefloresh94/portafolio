import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Technology } from '../../../models/technology';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-bento-card',
  imports: [CommonModule],
  templateUrl: './bento-card.component.html',
  styleUrl: './bento-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('flipCard', [
      state('front', style({ opacity: 1 })),
      state('back', style({ opacity: 1 })),
      transition('front <=> back', animate('0.6s ease-in-out')),
    ]),
  ],
  standalone: true,
})
export class BentoCardComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() frontContent!: string;
  @Input() backContent!: string;
  @Input() technologies: Technology[] = [];

  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
