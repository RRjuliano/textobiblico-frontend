import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import searchApi from './services/searchsApi';
import capterApi from './services/captersApi';
import bibliaApi from './services/bibliasApi';


export const store = configureStore({
  reducer: { [searchApi.reducerPath]: searchApi.reducer, [capterApi.reducerPath]: capterApi.reducer, [bibliaApi.reducerPath]: bibliaApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware, capterApi.middleware, bibliaApi.middleware),
});

setupListeners(store.dispatch);