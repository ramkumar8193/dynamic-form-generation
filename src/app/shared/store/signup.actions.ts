import { createAction, props } from '@ngrx/store';

export const updateSignupFormData = createAction(
  '[Signup] Update Form Data',
  props<{ formData: any }>()   // 👈 define payload
);