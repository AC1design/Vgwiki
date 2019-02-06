import React from 'react'

const Square = props => (
    <svg width={20} height={20} {...props}>
        <title>{'Rectangle 24'}</title>
        <rect width={20} height={20} rx={4} fill="#FFF" fillRule="evenodd" />
    </svg>
)

export default Square