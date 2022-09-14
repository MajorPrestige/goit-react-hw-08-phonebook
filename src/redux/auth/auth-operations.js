import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosSignup } from 'api/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosSignup(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
