import type { Meta, StoryObj } from "@storybook/react"
import DataGrid from "./data-grid";


const meta = {
    title: 'Data Grid',
    component: DataGrid,
    argTypes: {
        columnDef: { control: 'object' },
        data: { control: 'object' }
    }
} as Meta<typeof DataGrid>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // columnDef: [
        //     { header: "Name", field: "name", width: 200 },
        //     { header: "Age", field: "age", width: 100 },
        //     { header: "Country", field: "country", width: 200 },
        //     { header: "City", field: "city", width: 200 },
        //     { header: "State", field: "state", width: 200 },
        // ],
        // data: [
        //     { name: "John Doe", age: 25, country: "United States", city: "New York", state: "New York" },
        //     { name: "Jane Doe", age: 22, country: "United States", city: "Los Angeles", state: "California" },
        //     { name: "Alice", age: 30, country: "United Kingdom", city: "London", state: "London" },
        //     { name: "Bob", age: 28, country: "United Kingdom", city: "Manchester", state: "Manchester" },
        //     { name: "Charlie", age: 35, country: "Australia", city: "Sydney", state: "New South Wales" },
        // ]
    }
}