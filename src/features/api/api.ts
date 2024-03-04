import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://api.kinopoisk.dev/v1.4/movie';

const options = {
  accept: 'application/json',
  // 'X-API-KEY': 'CAXNGFV-W9S4EWG-QGNG564-Y8S0F8W',
  'X-API-KEY': 'XAPDHT4-Z4048Y5-J6WPJRR-Q3T49BG',
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    headers: options,
  }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetFilmsQuery } = api;
