import { createReducer, on } from '@ngrx/store';
import { updateLoginFormData, updateSignupFormData } from './signup.actions';

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
    })),

    on(updateLoginFormData, (state, { loginData }) => ({
        ...state,
        loginData
    }))
);
