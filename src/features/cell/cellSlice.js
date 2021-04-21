import { createSlice } from '@reduxjs/toolkit'
import { Map } from 'immutable'

const initialState = {
  cellInput: '',
  cellTypes: new Map()
}

export const cellSlice = createSlice({
  name: 'cell',
  initialState,
  reducers: {
    addCell: (state) => {
      const data = state.cellInput.split('\n')
      let newInput = ''
      data.forEach((item, index) => {
        if (item !== '') {
          let strings = item.split(' ')
          strings = strings.filter(item => item)

          if (strings.length <= 1) {
            newInput += item + '\n'
          } else if (Array.from(state.cellTypes.keys()).includes(strings[0])) {
            newInput += item + '\n'
          } else {
            state.cellTypes = state.cellTypes.set(strings[0], { domains: strings.slice(1) })
          }
        }
      })

      state.cellInput = newInput
    },
    setCellInput: (state, action) => {
      state.cellInput = action.payload
    }
  }
})

export const selectCellTypes = (state) => state.cell.cellTypes

export const selectCellInput = (state) => state.cell.cellInput

export const { addCell, setCellInput } = cellSlice.actions

export default cellSlice.reducer
