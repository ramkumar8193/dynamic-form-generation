import { createReducer, on } from '@ngrx/store';
import { updateSignupFormData } from './signup.actions';

export interface SignupState {
    formData: any;
}

export const initialState: SignupState = {
    formData: null,
};

export const signupReducer = createReducer(
    initialState,
    on(updateSignupFormData, (state, { formData }) => ({
        ...state,
        formData: formData
    }))
);
