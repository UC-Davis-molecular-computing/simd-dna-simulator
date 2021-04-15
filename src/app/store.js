import { configureStore } from '@reduxjs/toolkit'
import cellReducer from '../features/cell/cellSlice'

export const store = configureStore({
  reducer: {
    cell: cellReducer
  }
})
