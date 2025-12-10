import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () =>
        import('@nx-admin-portal/features/feature-shell').then(m => m.featureShellRoutes),
    }
];
