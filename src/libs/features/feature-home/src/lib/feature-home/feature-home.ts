import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'home-feature-home',
  imports: [
    CommonModule,
    NzButtonModule
  ],
  templateUrl: './feature-home.html',
  styleUrl: './feature-home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHome {}
