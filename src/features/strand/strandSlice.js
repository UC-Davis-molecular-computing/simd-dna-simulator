import { createSlice } from '@reduxjs/toolkit'

const { Map } = require('immutable')

const initialState = {
  strandInput: '',
  strandTypes: new Map()
}

export const strandSlice = createSlice({
  name: 'strand',
  initialState,
  reducers: {
    addStrand: (state) => {
      const data = state.strandInput.split('\n')
      let newInput = ''
      data.forEach((item, index) => {
        if (item !== '') {
          let strings = item.split(' ')
          strings = strings.filter(item => item)
          const hexRegex = /^#?[0-9A-Fa-f]{6}$/
          let color = '0x000000'

          if (strings.length > 0 && strings[strings.length - 1].match(hexRegex)) {
            color = strings[strings.length - 1]
            strings = strings.slice(0, -1)
            if (!color.startsWith('#')) {
              color = '#' + color
            }
          }

          if (strings.length <= 2) {
            newInput += item + '\n'
          } else if (Array.from(state.strandTypes.keys()).includes(strings[0])) {
            newInput += item + '\n'
          } else if (strings[strings.length - 1] !== 'true' && strings[strings.length - 1] !== 'false') {
            newInput += item + '\n'
          } else {
            state.strandTypes = state.strandTypes.set(strings[0], { domains: strings.slice(1, -1), is_complementary: strings[strings.length - 1] === 'true', color: color })
          }
        }
      })

      state.strandInput = newInput
    },
    setStrandInput: (state, action) => {
      state.strandInput = action.payload
    }
  }
})

export const selectStrandTypes = (state) => state.strand.strandTypes

export const selectStrandInput = (state) => state.strand.strandInput

export const { addStrand, setStrandInput } = strandSlice.actions

export default strandSlice.reducer
