import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dynamic-form',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {

  @Input() formSchema: any = [];
  @Input() isFrom: string = '';
  public commonForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.formSchema)
    const group: any = {};
    this.formSchema.forEach((field: any) => {
      const validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }
      if (field.type === 'email') {
        validators.push(Validators.email);
      }
      group[field.name] = ['', validators];
    });

    this.commonForm = this.fb.group(group);
  }

  onSubmit() {
    if (this.commonForm.valid) {
      console.log('Form Submitted:', this.commonForm.value);
    } else {
      this.commonForm.markAllAsTouched();
    }
  }

}
