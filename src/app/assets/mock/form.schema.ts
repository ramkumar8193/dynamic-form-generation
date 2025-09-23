export const onboardingSchema = [
    { "type": "text", "label": "Full Name", "name": "fullName", "required": true },
    { "type": "email", "label": "Email", "name": "email", "required": true },
    { "type": "password", "label": "Password", "name": "password", "required": true },
    { "type": "number", "label": "Phone No", "name": "phoneNo", "required": true },
    { "type": "checkbox", "label": "Subscribe", "name": "subscribe" }]

export const userLoginSchema = [
    { "type": "text", "label": "Username", "name": "username", "required": true },
    { "type": "password", "label": "Password", "name": "password", "required": true },
    { "type": "checkbox", "label": "Remember Me", "name": "remember" }]