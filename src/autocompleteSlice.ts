import { createSlice } from '@reduxjs/toolkit';

export interface AutocompleteState {
  selectedPlaces: any[];
}

const initialState: AutocompleteState = {
  selectedPlaces: [],
};

export const autocompleteSlice = createSlice({
  name: 'autocomplete',
  initialState,
  reducers: {
    addSelectedPlace: (state, action) => {
      state.selectedPlaces.push(action.payload);
    },
  }
})

export const { addSelectedPlace } = autocompleteSlice.actions;

export default autocompleteSlice.reducer;