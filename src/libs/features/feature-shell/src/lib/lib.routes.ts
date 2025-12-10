import { Route } from '@angular/router';
import { AdminLayout } from './admin-layout/admin-layout';

export const featureShellRoutes: Route[] = [
  {
    path: '',
    component: AdminLayout,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('@nx-admin-portal/features/feature-home').then(m => m.featureHomeRoutes),
      },
    ]
  }
];
