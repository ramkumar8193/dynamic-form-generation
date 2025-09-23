import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { DynamicFormComponent } from '../../shared/dynamic-form/dynamic-form.component';
import { onboardingSchema } from '../../assets/mock/form.schema';
import { Store } from '@ngrx/store';
import { updateSignupFormData } from '../../shared/store/signup.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  imports: [
    DynamicFormComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {

  public onboardingFormSchema: any = [];
  public isFrom: string = 'onboarding';
  public receiveSignupdata$: any;
  private _snackBar = inject(MatSnackBar);

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
        if (data) {
          this._snackBar.open('User has been onboarded successfully.', '', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 5 * 1000,
          });
        }
      });
    }
  }
}
