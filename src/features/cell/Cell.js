import { useDispatch, useSelector } from 'react-redux'
import { addCell, setCellInput, selectCellInput, selectCellTypes } from './cellSlice'
import styles from './Cell.module.css'

export function Cell () {
  const cellInput = useSelector(selectCellInput)
  const cellTypes = useSelector(selectCellTypes)
  const dispatch = useDispatch()

  return (
    <div className={styles.cell}>
        <textarea
            placeholder="Enter the cell name followed by the domain names, separated by spaces (e.g. 'Bit a b c'.) Multiple cell types can be added at once, one cell type per line."
            value={cellInput}
            onChange={(e) => dispatch(setCellInput(e.target.value))}
        />
        <br/>
        <button
            aria-label="Add Cell Type"
            onClick={() => dispatch(addCell())}
        >
            Add Cell Type
        </button>
        {cellTypes.size > 0 &&
        <div>
            <h2>Cells</h2>
            <table>
                <tbody>
                    {Array.from(cellTypes.keys()).map((cellName) => {
                      const cellData = cellTypes.get(cellName)
                      return (<tr>
                            <td>{cellName}</td>
                            {cellData.domains.map((domainName) => {
                              return (<td>{domainName}</td>)
                            })}
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>}
    </div>)
}
