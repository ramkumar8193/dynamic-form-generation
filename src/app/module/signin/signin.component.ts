import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { userLoginSchema } from '../../assets/mock/form.schema';
import { DynamicFormComponent } from '../../shared/dynamic-form/dynamic-form.component';
import { Store } from '@ngrx/store';
import { updateLoginFormData } from '../../shared/store/signup.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  imports: [
    DynamicFormComponent
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent implements OnInit {

  public isFrom: string = 'login';
  public loginFormSchema: any = [];
  public receiveSignindata$: any;
  private _snackBar = inject(MatSnackBar);

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.loginFormSchema = userLoginSchema;
  }

  ngDoCHeck() {
    console.log('Sing in component running')
  }

  public receiveFormData(event: any): void {
    console.log(event)
    if (event) {
      this.store.dispatch(updateLoginFormData(event));

      this.receiveSignindata$ = this.store.select(
        (state: any) => state.updateSignupFormData
      );
      console.log(this.receiveSignindata$)
      this.receiveSignindata$.subscribe((data: any) => {
        console.log(data)
        if (data) {
          this._snackBar.open('User logged in successfully.', '', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 5 * 1000,
          });
        }
      });
    }
  }

}
