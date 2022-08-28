import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const herosApi = createApi({
  reducerPath: 'heros',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://akabab.github.io/superhero-api/api'
  }),
  endpoints: (builder) =>({
      getAll: builder.query({
        query: () => '/all.json'
      }),

      getOneId: builder.query({
        query: (id) => `/id/${id}.json`
      })
  })
})

export const { useGetAllQuery, useGetOneIdQuery } = herosApi;