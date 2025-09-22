import { Routes } from '@angular/router';
import { UserOnboardingComponent } from './module/user-onboarding/user-onboarding.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'user-onboarding',
        pathMatch:'full'
    },
    {
        path: 'user-onboarding',
        component: UserOnboardingComponent
    }
];
