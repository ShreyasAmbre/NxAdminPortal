import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'home-feature-home',
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzSwitchModule
  ],
  templateUrl: './feature-home.html',
  styleUrl: './feature-home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHome {
  isRtl = signal<boolean>(true);
}
