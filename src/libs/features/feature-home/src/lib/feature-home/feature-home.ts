import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-feature-home',
  imports: [CommonModule],
  templateUrl: './feature-home.html',
  styleUrl: './feature-home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHome {}
