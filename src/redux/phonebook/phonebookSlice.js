import { createSlice } from '@reduxjs/toolkit';
import { phonebookInitialState } from './initialState';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  reducers: {
    insertContact: (state, action) => {
      return state.push(action.payload);
    },

    removeContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },

    updateFilter: (state, action) => {
      //   return state.filter(contact => contact.name.includes(action.payload));
      state.filter = action.payload;
    },
  },
});

export const { insertContact, removeContact, updateFilter } =
  phonebookSlice.actions;
