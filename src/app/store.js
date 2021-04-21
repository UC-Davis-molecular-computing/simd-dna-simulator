import { configureStore } from '@reduxjs/toolkit'
import cellReducer from '../features/cell/cellSlice'
import strandReducer from '../features/strand/strandSlice'
import instructionReducer from '../features/instruction/instructionSlice'
import registerReducer from '../features/register/registerSlice'

export const store = configureStore({
  reducer: {
    cell: cellReducer,
    strand: strandReducer,
    instruction: instructionReducer,
    register: registerReducer
  }
})
