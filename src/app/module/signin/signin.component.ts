import { Component, OnInit } from '@angular/core';
import { userLoginSchema } from '../../assets/mock/form.schema';
import { DynamicFormComponent } from '../../shared/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-signin',
  imports: [
    DynamicFormComponent
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {

  public isFrom: string = 'login';
  public loginFormSchema: any = [];

  ngOnInit() {
    this.loginFormSchema = userLoginSchema;
  }

  ngDoCHeck() {
    console.log('Sing in component running')
  }

  public receiveFormData(event: any): void {
    console.log(event)
  }

}
