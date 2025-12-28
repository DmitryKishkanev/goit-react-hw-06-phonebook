import { createSlice } from '@reduxjs/toolkit';
import { phonebookInitialState } from './initialState';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  reducers: {
    insertContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload,
      );
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { insertContact, removeContact, setFilter } =
  phonebookSlice.actions;
