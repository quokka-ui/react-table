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
        <div className="overflow-x-auto">
            <table className="border-spacing-0 w-full h-full">
                <thead className="bg-gray-200">
                    {
                        columnDef.map((col, index) => (
                            <th className="font-semibold text-left p-2 border-b-2 border-l-2 border-b-slate-200 border-l-slate-200" style={{ minWidth: col.width }} key={index}>{col.header}</th>
                        ))
                    }
                </thead>
                <tbody className="">
                    {
                        data.map((row, index) => (
                            <tr className="hover:bg-slate-400" key={index}>
                                {
                                    columnDef.map((cell, index) => {
                                        if (cell.render) {
                                            return <td className="p-3 border-b-2 border-b-slate-200" style={{ minWidth: cell.width }} key={index}>{cell.render(row)}</td>
                                        }
                                        return <td className="sample-table-td" style={{ minWidth: cell.width, }} key={index}>{row[cell.field]}</td>
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