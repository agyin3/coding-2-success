import React from 'react'

const Layout = ({ children, background, padding, height, align, justify, direction, width, className }) => {
    return(
        <div 
        className={`${className || ''}`}
        style={{
            height: `${height || '100vh'}`,
            width: `${width || 'auto'}`,
            background:`${background || 'auto'}`,
            padding: `${padding || 'auto'}`,
            display: 'flex',
            flexDirection: `${direction || 'column'}`,
            alignItems: `${align || 'center'}`,
            justifyContent: `${justify || 'center'}`,
            }}>
            {children}
        </div>
    )
}

export default Layout