import { useDispatch, useSelector } from 'react-redux'
import { addInstruction, setInstructionInput, selectInstructionInput, selectInstructions } from './instructionSlice'
import { selectStrandTypes } from '../strand/strandSlice'

export function Instruction () {
  const instructionInput = useSelector(selectInstructionInput)
  const instructions = useSelector(selectInstructions)
  const strandTypes = useSelector(selectStrandTypes)
  const dispatch = useDispatch()
  return (
  <div>
      <textarea
        placeholder="Enter the strand names separated by spaces. Instructions must consist of strands that already exist. Multiple instructions can be added at once, one instruction per line."
        value={instructionInput}
        onChange={(e) => dispatch(setInstructionInput(e.target.value))}>
      </textarea>
      <br />
      <button
        aria-label="Add Instruction"
        onClick={() => dispatch(addInstruction(Array.from(strandTypes.keys())))}
      >
        Add Instruction
      </button>
      {instructions.size > 0 &&
      <div>
          <h2>Instructions</h2>
          <table>
              <tbody>
                  {instructions.map((instruction, index) => {
                    return (<tr key={'instr' + (index + 1)}>
                                <td>{'Instruction ' + (index + 1)}</td>
                                {instruction.map((strandName) => {
                                  return (<td>{strandName}</td>)
                                })}
                            </tr>)
                  })}
              </tbody>
          </table>
      </div>}
  </div>)
}
