import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../utils/getBaseUrl';

const captersApi = createApi({
    reducerPath: 'captersApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api/capter-acf`, credentials: 'include' }),
    tagTypes: ['Capters'],
    endpoints: (builder) =>({
        fetchCapterById: builder.query({
            query: (cod) => `/${cod}`,
            providesTags: (result, error, cod) => [{ type: "Capters", cod }],
        })
    })
});

export const {useFetchCapterByIdQuery} = captersApi;
export default captersApi;