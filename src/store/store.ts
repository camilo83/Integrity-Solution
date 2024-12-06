import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import servicesReducer from '../redux/servicesSlice';
import teamsReducer from '../redux/teamsSlice';
import blogReducer from '../redux/blogSlice';
import sustainabilityReducer from '../redux/sustainabilitySlice';

export const store = configureStore({
  reducer: {
    servicesState: servicesReducer,
    teamsState: teamsReducer,
    blogState: blogReducer,
    sustainabilityState: sustainabilityReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
