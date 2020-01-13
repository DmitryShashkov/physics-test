import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nox-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {}