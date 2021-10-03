import { configureStore } from '@reduxjs/toolkit'
import subjectsSlice from './subjectsSlice'

export const store = configureStore({
  reducer: {
      subjects: subjectsSlice
  },
})