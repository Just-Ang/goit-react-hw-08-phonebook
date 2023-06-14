import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterContact: {
      reducer(state, action) {
        return action.payload.name;
      },
      prepare(name) {
        return {
          payload: {
            name,
          },
        };
      },
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
