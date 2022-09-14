import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import auth from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth,
  },
});
