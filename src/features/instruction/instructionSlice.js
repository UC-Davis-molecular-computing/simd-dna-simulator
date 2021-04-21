import { createSlice } from '@reduxjs/toolkit'
import { List } from 'immutable'

const initialState = {
  instructionInput: '',
  instructions: new List()
}

export const instructionSlice = createSlice({
  name: 'instruction',
  initialState,
  reducers: {
    addInstruction: (state, action) => {
      const data = state.instructionInput.split('\n')
      let newInput = ''
      data.forEach((item, index) => {
        if (item !== '') {
          let strings = item.split(' ')
          strings = strings.filter(item => item)
          strings = [...new Set(strings)]

          let containsNonexistentStrands = false
          for (const strand of strings) {
            if (!action.payload.includes(strand)) {
              containsNonexistentStrands = true
              break
            }
          }

          if (strings.length === 0) {
            newInput += item + '\n'
          } else if (containsNonexistentStrands) {
            newInput += item + '\n'
          } else {
            state.instructions = state.instructions.push(strings)
          }
        }
      })

      state.instructionInput = newInput
    },
    setInstructionInput: (state, action) => {
      state.instructionInput = action.payload
    }
  }
})

export const selectInstructions = (state) => state.instruction.instructions

export const selectInstructionInput = (state) => state.instruction.instructionInput

export const { addInstruction, setInstructionInput } = instructionSlice.actions

export default instructionSlice.reducer
