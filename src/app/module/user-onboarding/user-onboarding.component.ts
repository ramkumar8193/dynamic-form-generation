import { Component } from '@angular/core';
import { DynamicFormComponent } from '../../shared/dynamic-form/dynamic-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import { onboardingSchema, userLoginSchema } from '../../assets/mock/form.schema';

@Component({
  selector: 'app-user-onboarding',
  imports: [
    MatTabsModule,
    DynamicFormComponent
  ],
  templateUrl: './user-onboarding.component.html',
  styleUrl: './user-onboarding.component.scss'
})
export class UserOnboardingComponent {

  public onboardingFormSchema: any = [];
  public loginFormSchema: any = [];
  public isFrom: string = '';

  ngOnInit() {
    this.onboardingFormSchema = onboardingSchema;
    this.loginFormSchema = userLoginSchema
  }

  onTabChange(event: any) {
    console.log(event)
    this.isFrom = (event.index == 1) ? 'login' : 'onboarding';
  }

}
