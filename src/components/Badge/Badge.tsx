import React from 'react'
import './badge.css'

function Badge({ children, color }: { children: React.ReactNode, color: string }) {
    return (
        <div className='badge' style={{ backgroundColor: color }}>
            {children}
        </div>
    )
}

export default Badge