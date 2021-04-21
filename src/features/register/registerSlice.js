import { createSlice } from '@reduxjs/toolkit'
import { List, Map } from 'immutable'

const initialState = {
  registerNameInput: '',
  displayedRegister: null,
  registers: new Map()
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    addRegister: (state) => {
      const data = state.registerNameInput.split('\n')
      let newInput = ''
      data.forEach((item, index) => {
        if (item !== '') {
          if (Array.from(state.registers.keys()).includes(item)) {
            newInput += item + '\n'
          } else {
            state.registers = state.registers.set(item, { cells: new List(), coverings: new List() })

            if (state.displayedRegister == null) {
              state.displayedRegister = item
            }
          }
        }
      })

      state.registerNameInput = newInput
    },
    setDisplayedRegister: (state, action) => {
      state.displayedRegister = action.payload
    },
    setRegisterNameInput: (state, action) => {
      state.registerNameInput = action.payload
    }
  }
})

export const selectRegisters = (state) => state.register.registers

export const selectDisplayedRegister = (state) => state.register.displayedRegister

export const selectRegisterNameInput = (state) => state.register.registerNameInput

export const { addRegister, setDisplayedRegister, setRegisterNameInput } = registerSlice.actions

export default registerSlice.reducer
