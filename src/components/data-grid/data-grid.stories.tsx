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
        mainColumns: ['Original Text', 'GPT Summary', 'Claude Summary', 'Llama Summary'],
        subColumns: ['Coherence', 'Clarity', 'Relevance', 'Correctness', 'Average'],
        data: [
            {
            originalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            gptSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
            claudeSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
            llamaSummary: { coherence: 3, clarity: 4, relevance: 4, correctness: 4, average: 3.75 },
            },
            {
            originalText: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            gptSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
            claudeSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
            llamaSummary: { coherence: 4, clarity: 3, relevance: 5, correctness: 4, average: 4 },
            },
            {
            originalText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            gptSummary: { coherence: 3, clarity: 4, relevance: 5, correctness: 4, average: 4 },
            claudeSummary: { coherence: 5, clarity: 5, relevance: 4, correctness: 5, average: 4.75 },
            llamaSummary: { coherence: 4, clarity: 4, relevance: 3, correctness: 5, average: 4 },
            },
            {
            originalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            gptSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
            claudeSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
            llamaSummary: { coherence: 3, clarity: 4, relevance: 4, correctness: 4, average: 3.75 },
            },
            {
            originalText: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            gptSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
            claudeSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
            llamaSummary: { coherence: 4, clarity: 3, relevance: 5, correctness: 4, average: 4 },
            },
            {
            originalText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            gptSummary: { coherence: 3, clarity: 4, relevance: 5, correctness: 4, average: 4 },
            claudeSummary: { coherence: 5, clarity: 5, relevance: 4, correctness: 5, average: 4.75 },
            llamaSummary: { coherence: 4, clarity: 4, relevance: 3, correctness: 5, average: 4 },
            },
            {
            originalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            gptSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
            claudeSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
            llamaSummary: { coherence: 3, clarity: 4, relevance: 4, correctness: 4, average: 3.75 },
            },
            {
            originalText: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            gptSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
            claudeSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
            llamaSummary: { coherence: 4, clarity: 3, relevance: 5, correctness: 4, average: 4 },
            },
            {
            originalText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            gptSummary: { coherence: 3, clarity: 4, relevance: 5, correctness: 4, average: 4 },
            claudeSummary: { coherence: 5, clarity: 5, relevance: 4, correctness: 5, average: 4.75 },
            llamaSummary: { coherence: 4, clarity: 4, relevance: 3, correctness: 5, average: 4 },
            },
            {
            originalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            gptSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
            claudeSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
            llamaSummary: { coherence: 3, clarity: 4, relevance: 4, correctness: 4, average: 3.75 },
            },
            {
            originalText: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            gptSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
            claudeSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
            llamaSummary: { coherence: 4, clarity: 3, relevance: 5, correctness: 4, average: 4 },
            },
            {
            originalText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            gptSummary: { coherence: 3, clarity: 4, relevance: 5, correctness: 4, average: 4 },
            claudeSummary: { coherence: 5, clarity: 5, relevance: 4, correctness: 5, average: 4.75 },
            llamaSummary: { coherence: 4, clarity: 4, relevance: 3, correctness: 5, average: 4 },
            },
        ]
    }
}