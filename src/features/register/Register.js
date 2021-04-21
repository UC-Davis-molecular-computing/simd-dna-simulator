import { useDispatch, useSelector } from 'react-redux'
import { addRegister, setDisplayedRegister, setRegisterNameInput, selectRegisterNameInput, selectDisplayedRegister, selectRegisters } from './registerSlice'

export function Register () {
  const registerNameInput = useSelector(selectRegisterNameInput)
  const displayedRegister = useSelector(selectDisplayedRegister)
  const registers = useSelector(selectRegisters)
  const dispatch = useDispatch()
  return (
  <div>
      <div>
        <textarea
          type="text"
          value={registerNameInput}
          placeholder="Enter the names of the new registers, one register name per line."
          name="register-name"
          onChange={(e) => dispatch(setRegisterNameInput(e.target.value))
          }>
        </textarea>
        <br/>
        <button
          aria-label="Add New Register"
          onClick={(e) => { dispatch(addRegister()) }}
        >
          Add New Register
        </button>
        <br/>
        <select
          name="register-list"
          value={displayedRegister}
          onChange={(e) => dispatch(setDisplayedRegister(e.target.value))}
        >
          {Array.from(registers.keys()).map((item, index) => {
            return <option value={item}>{item}</option>
          })}
        </select>
      </div>
  </div>)
}
