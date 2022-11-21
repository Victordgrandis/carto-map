import { createSlice } from '@reduxjs/toolkit';

interface MapState {
  airports: {
    pointRadiusMinPixels: number;
    getLineColor: number[];
    getFillColor: number[];
    lineWidthMinPixels: number;
  };
  retailStores: {
    pointRadiusMinPixels: number;
    getLineColor: number[];
    getFillColor: number[];
    lineWidthMinPixels: number;
  };
  usaBlockgroup: {
    pointRadiusMinPixels: number;
    getLineColor: number[];
    getFillColor: number[];
    lineWidthMinPixels: number;
  };
}

const initialState: MapState = {
  airports: {
    lineWidthMinPixels: 1,
    pointRadiusMinPixels: 3,
    getLineColor: [21, 101, 37],
    getFillColor: [130, 176, 139],
  },
  retailStores: {
    lineWidthMinPixels: 1,
    pointRadiusMinPixels: 2,
    getLineColor: [93, 73, 193],
    getFillColor: [75, 51, 193],
  },
  usaBlockgroup: {
    lineWidthMinPixels: 1,
    pointRadiusMinPixels: 2,
    getLineColor: [215, 106, 106],
    getFillColor: [237, 234, 232],
  },
};

const slice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setAirports: (state, action) => {
      state.airports = action.payload;
    },
    setRetailStores: (state, action) => {
      state.retailStores = action.payload;
    },
    setUsaBlockgroup: (state, action) => {
      state.usaBlockgroup = action.payload;
    },
  },
});

export default slice.reducer;

export const { setAirports, setRetailStores, setUsaBlockgroup } = slice.actions;
