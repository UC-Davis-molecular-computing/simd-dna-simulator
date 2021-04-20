import { useDispatch, useSelector } from 'react-redux'
import { addStrand, setStrandInput, selectStrandInput, selectStrandTypes } from './strandSlice'

export function Strand () {
  const strandInput = useSelector(selectStrandInput)
  const strandTypes = useSelector(selectStrandTypes)
  const dispatch = useDispatch()
  return (
  <div>
      <textarea
        placeholder="Enter the strand name, followed by the domain names, followed by a boolean value indicating whether the strand is complementary to the top strand (dashed lines) or not (solid line.) (e.g. Zero-first a b c false) Multiple strand types can be added at once, one strand type per line."
        value={strandInput}
        onChange={(e) => dispatch(setStrandInput(e.target.value))}>
      </textarea>
      <br />
      <button
        aria-label="Add Strand Type"
        onClick={() => dispatch(addStrand())}
      >
        Add Strand Type
      </button>
      {strandTypes.size > 0 &&
      <div>
          <h2>Strands</h2>
          <table>
              <tbody>
                {Array.from(strandTypes.keys()).map((strandName) => {
                  const cellData = strandTypes.get(strandName)
                  const left = '\u25C0'
                  const right = '\u25B6'
                  return (<tr>
                            <td>{strandName}</td>
                            {cellData.is_complementary && <td>{left}</td>}
                            {cellData.domains.map((domainName) => {
                              return (<td>{domainName}</td>)
                            })}
                            {!cellData.is_complementary && <td>{right}</td>}
                        </tr>)
                })}
              </tbody>
          </table>
      </div>}
  </div>)
}
