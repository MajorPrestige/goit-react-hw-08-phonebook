import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, current } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
  firstLoading: false,
};

const accessAuth = (store, payload) => {
  store.loading = false;
  store.isLogin = true;
  store.user = payload.user;
  store.token = payload.token;
};

const auth = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // * SIGN UP

    [signup.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, { payload }) => accessAuth(store, payload),
    [signup.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // * LOGIN

    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => accessAuth(store, payload),
    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // * LOGOUT

    [logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: () => ({ ...initialState }),
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    // * CURRENT

    [current.pending]: store => {
      store.firstLoading = true;
      store.error = null;
    },
    [current.fulfilled]: (store, { payload }) => {
      store.firstLoading = false;
      store.isLogin = true;
      store.user = payload;
    },
    [current.rejected]: (store, { payload }) => {
      store.firstLoading = false;
      store.error = payload;
    },
  },
});

export default auth.reducer;
