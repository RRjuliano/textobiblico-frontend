import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../utils/getBaseUrl';

const bibliasApi = createApi({
    reducerPath: 'bibliasApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api/biblia-acf`, credentials: 'include' }),
    tagTypes: ['Biblias'],
    endpoints: (builder) =>({
        fetchBibliaById: builder.query({
            query: (cod) => `/${cod}`,
            providesTags: (result, error, cod) => [{ type: "Biblias", cod }],
        })
    })
});

export const {useFetchBibliaByIdQuery} = bibliasApi;
export default bibliasApi;