import { configureStore } from '@reduxjs/toolkit'
import cellReducer from '../features/cell/cellSlice'
import strandReducer from '../features/strand/strandSlice'

export const store = configureStore({
  reducer: {
    cell: cellReducer,
    strand: strandReducer
  }
})
