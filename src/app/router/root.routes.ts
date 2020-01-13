import { Routes } from '@angular/router';
import { RootComponent } from '@app/root.component';
import { TestComponent } from '@app/features/test/test.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TestComponent,
      },
    ],
  },
];
