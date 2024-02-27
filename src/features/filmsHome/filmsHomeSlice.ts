import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Ivideo {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  duration: number;
  premiereRu: string;
  listImg: string;
}

interface initialState {
  list: Ivideo[] | never[];
  isLoading: boolean;
}
export const getFilmsHome = createAsyncThunk(
  'filmsHome/getFilmsHome',
  async (_, thunkAPI) => {
    try {
      const options = {
        headers: {
          'X-API-KEY': 'adc16b74-5a6b-4e50-ba2b-c8940978c73f',
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.get(
        'https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2024&month=JANUARY',
        options
      );
      return data.items;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState: initialState = {
  list: [],
  isLoading: false,
};

const filmsHomeSlice = createSlice({
  name: 'filmsHome',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilmsHome.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFilmsHome.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getFilmsHome.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default filmsHomeSlice.reducer;
