import { Component, OnInit } from '@angular/core';
import { DynamicFormComponent } from '../../shared/dynamic-form/dynamic-form.component';
import { onboardingSchema } from '../../assets/mock/form.schema';
import { Store } from '@ngrx/store';
import { updateSignupFormData } from '../../shared/store/signup.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  imports: [
    DynamicFormComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  public onboardingFormSchema: any = [];
  public isFrom: string = 'onboarding';
  public receiveSignupdata$: any;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.onboardingFormSchema = onboardingSchema;
    this.receiveSignupdata$ = this.store.select(
      (state: any) => state.updateSignupFormData
    );
    console.log(this.receiveSignupdata$)
  }

  ngDoCHeck() {
    console.log('Signup component running')
  }

  public receiveFormData(event: any): void {
    console.log(event)
    if (event) {
      this.store.dispatch(updateSignupFormData({ formData: event }));

      this.receiveSignupdata$ = this.store.select(
        (state: any) => state.updateSignupFormData
      );
      console.log(this.receiveSignupdata$)
      this.receiveSignupdata$.subscribe((data: any) => {
        console.log(data)
      })
    }
  }
}
