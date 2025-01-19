/* eslint-disable @typescript-eslint/no-explicit-any */
import './sampletable.css'

type column = {
    header: string
    field: string
    width: number
    render?: (cell: any) => JSX.Element
}

type TableProps = {
    columnDef: column[]
    data: any[]
}

function Table({ columnDef, data }: TableProps): JSX.Element {
    return (
        <div className="sample-table-wrapper">
            <table className="sample-table">
                <thead className="sample-table-thead">
                    {
                        columnDef.map((col, index) => (
                            <th className="sample-table-th" style={{ minWidth: col.width }} key={index}>{col.header}</th>
                        ))
                    }
                </thead>
                <tbody className="sample-table-tbody">
                    {
                        data.map((row, index) => (
                            <tr className="sample-table-tr" key={index}>
                                {
                                    columnDef.map((cell, index) => {
                                        if (cell.render) {
                                            return <td className="sample-table-td" style={{ minWidth: cell.width }} key={index}>{cell.render(row)}</td>
                                        }
                                        return <td className="sample-table-td" style={{ minWidth: cell.width }} key={index}>{row[cell.field]}</td>
                                    })
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table