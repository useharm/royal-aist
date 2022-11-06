import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import menuSlice from './slices/menuSlice';
import reviewSlice from './slices/reviewSlice';
import registerChildSlice from './slices/registerChildSlice';



export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: {
    menuSlice,
    reviewSlice,
    registerChildSlice,
  },
})


type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;