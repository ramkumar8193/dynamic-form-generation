import { createAction, props } from '@ngrx/store';

export const updateSignupFormData = createAction(
  '[Signup] Update Form Data',
  props<{ formData: any }>()
);

export const updateLoginFormData = createAction(
  '[Login] Update Form Data',
  props<{ loginData: any }>()
);