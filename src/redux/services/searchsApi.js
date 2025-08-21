import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../utils/getBaseUrl';

const searchsApi = createApi({
    reducerPath: 'searchsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${getBaseUrl()}/api/search`, credentials: 'include' }),
    tagTypes: ['Searchs'],
    endpoints: (builder) =>({
        fetchSearchById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: "Searchs", id }],
        }),
        createSearch: builder.mutation({
            query: (newSearch) => ({
                url: `/new`,
                method: "POST",
                body: newSearch
            }),
            invalidatesTags: ["Searchs"]
        }),
    })
});

export const {useFetchSearchByIdQuery, useCreateSearchMutation} = searchsApi;
export default searchsApi;