import { useDispatch, useSelector } from 'react-redux'
import { addStrand, setStrandInput, selectStrandInput, selectStrandTypes } from './strandSlice'

export function Strand () {
  const strandInput = useSelector(selectStrandInput)
  const strandTypes = useSelector(selectStrandTypes)
  const dispatch = useDispatch()
  return (
  <div>
      <textarea
        placeholder="Enter the strand name, followed by the domain names, followed by a boolean value indicating whether the strand is complementary to the top strand (dashed lines) or not (solid line.) Optionally, you can include a hex color code at the end to assign a color to your strand (default is black.) (e.g. Zero-first a b c false #0066ff) Multiple strand types can be added at once, one strand type per line."
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
                  const strandData = strandTypes.get(strandName)
                  const left = '\u25C0'
                  const right = '\u25B6'
                  return (<tr style={{ color: strandData.color }}>
                            <td>{strandName}</td>
                            {strandData.is_complementary && <td>{left}</td>}
                            {strandData.domains.map((domainName) => {
                              return (<td>{domainName}</td>)
                            })}
                            {!strandData.is_complementary && <td>{right}</td>}
                        </tr>)
                })}
              </tbody>
          </table>
      </div>}
  </div>)
}
