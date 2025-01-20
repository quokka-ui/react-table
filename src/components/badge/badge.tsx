import React from 'react'

function Badge({ children, color }: { children: React.ReactNode, color: string }) {
    return (
        <div className='rounded-xl text-white text-center w-fit py-1 px-2 bg-blue-600' style={{ backgroundColor: color }}>
            {children}
        </div>
    )
}

export default Badge