import { configureStore } from '@reduxjs/toolkit'
import cellReducer from '../features/cell/cellSlice'
import strandReducer from '../features/strand/strandSlice'
import instructionReducer from '../features/instruction/instructionSlice'

export const store = configureStore({
  reducer: {
    cell: cellReducer,
    strand: strandReducer,
    instruction: instructionReducer
  }
})
