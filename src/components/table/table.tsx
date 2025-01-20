/* eslint-disable @typescript-eslint/no-explicit-any */

import '../../index.css'

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
        <div className="quk-ui-overflow-x-auto bg-blue-400">
            <table className="quk-ui-border-spacing-0 quk-ui-w-full quk-ui-h-full">
                <thead className="quk-ui-bg-gray-200">
                    {
                        columnDef.map((col, index) => (
                            <th className="quk-ui-font-semibold quk-ui-text-left quk-ui-p-2 quk-ui-border-b-2 quk-ui-border-l-2 quk-ui-border-b-slate-200 quk-ui-border-l-slate-200" style={{ minWidth: col.width }} key={index}>{col.header}</th>
                        ))
                    }
                </thead>
                <tbody className="">
                    {
                        data.map((row, index) => (
                            <tr className="hover:quk-ui-bg-slate-400" key={index}>
                                {
                                    columnDef.map((cell, index) => {
                                        if (cell.render) {
                                            return <td className="quk-ui-p-3 quk-ui-border-b-2 quk-ui-border-b-slate-200" style={{ minWidth: cell.width }} key={index}>{cell.render(row)}</td>
                                        }
                                        return <td className="sample-table-td !quk-ui-bg-blue-400" style={{ minWidth: cell.width, }} key={index}>{row[cell.field]}</td>
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