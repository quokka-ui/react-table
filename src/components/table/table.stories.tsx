import type { Meta, StoryObj } from "@storybook/react"
import SimpleTable from "./table"


const meta = {
    title: 'SimpleTable',
    component: SimpleTable,
    argTypes: {
        columnDef: { control: 'object' },
        data: { control: 'object' }
    }
} as Meta<typeof SimpleTable>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        columnDef: [
            { header: "Name", field: "name", width: 200 },
            { header: "Age", field: "age", width: 100 },
        ],
        data: [
            { name: "John Doe", age: 25 },
            { name: "Jane Doe", age: 26 },
        ]
    }
}