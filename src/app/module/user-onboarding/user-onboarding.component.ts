import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-user-onboarding',
  imports: [
    MatTabsModule,
    SignupComponent,
    SigninComponent
  ],
  templateUrl: './user-onboarding.component.html',
  styleUrl: './user-onboarding.component.scss'
})
export class UserOnboardingComponent {

  public isFrom: string = '';

  onTabChange(event: any) {
    console.log(event)
    this.isFrom = (event.index == 1) ? 'login' : 'onboarding';
  }

}
