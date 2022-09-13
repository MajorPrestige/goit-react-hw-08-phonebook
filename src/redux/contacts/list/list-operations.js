import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  axiosGetContacts,
  axiosDeleteContacts,
  axiosPostContacts,
  axiosCheckContacts,
} from 'api/api';

export const getContacts = createAsyncThunk(
  'contacts/list/items/get',
  async (_, { rejectWithValue }) => {
    try {
      const data = await axiosGetContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/list/items/add',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await axiosPostContacts(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (contact, { getState }) => {
      const { contacts } = getState();
      const duplicateContact = contacts.list.items.find(
        el => el.number === contact.number
      );

      if (duplicateContact?.number === contact.number) {
        alert(`Number: ${contact.number} is already in your contacts`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/list/items/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axiosDeleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const checkContacts = createAsyncThunk(
  'contacts/list/items/check',
  async (id, { rejectWithValue }) => {
    try {
      await axiosCheckContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteCheckedContacts = createAsyncThunk(
  'contacts/list/items/deleteChecked',
  async (checkedContacts, { rejectWithValue }) => {
    try {
      for (let i = 0; i < checkedContacts.length; i += 1) {
        await axiosDeleteContacts(checkedContacts[i].id);
      }

      const data = checkedContacts.map(({ id }) => id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
